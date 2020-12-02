import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { authModel } from "./auth.model";
import { createControllerProxy } from "../helpers/controllerProxy";

class AuthController {
  validateCredential(req, res, next) {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Некоректные данные при регистрации",
      });
    }
    next();
  }

  async isAutorizate(req, res, next) {
    try {
      const authToken = req.headers.authorization;

      if (!authToken) {
        throw res.status(401).json("Пользователь не авторизован");
      }

      const token = authToken.replace("Bearer ", "");

      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY,
        function (err, decoded) {
          console.log("1", err);
          if (err) {
            throw res.status(401).json(err.name);
          }
          return decoded;
        }
      );

      req.user = decoded.id;

      next();
    } catch (err) {
      next(err);
    }
  }

  async registerUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const uniqueUser = await authModel.getUserByEmail(email);

      if (uniqueUser) {
        return res.status(409).json("Такой пользователь уже существует");
      }

      const passwordHashed = await this.passwordHash(password);

      const newUser = {
        email,
        password: passwordHashed,
      };

      await authModel.addNewUser(newUser);

      return res.status(201).json("Пользователь создан");
    } catch (err) {
      next(err);
    }
  }

  async logInUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await authModel.getUserByEmail(email);

      if (!user) {
        throw new Error("Такого пользователя не существует");
      }

      const validPwd = await this.passwordChecked(password, user.password);

      if (!validPwd) {
        throw new Error("Некорректный пароль");
      }

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

      await authModel.getUserByIdAndUpdate(user._id, token);

      console.log(res.req.headers["Access-Control-Allow-Origin"] =
      "https://shortenlink-dd415.web.app/");


      console.log(res.req.headers);

      return res.status(200).json({ userId: user._id, token });
    } catch (err) {
      next(err);
    }
  }

  async logOutUser(req, res, next) {
    const id = req.user;
    const token = "";

    await authModel.getUserByIdAndUpdate(id, token);

    return res.status(204).json();
  }

  async passwordHash(pwd) {
    const salt = Number(process.env.SALT_ROUNDS);
    return await bcrypt.hash(pwd, salt);
  }

  async passwordChecked(pwd, userPwd) {
    return bcrypt.compare(pwd, userPwd);
  }
}

export const authController = createControllerProxy(new AuthController());
