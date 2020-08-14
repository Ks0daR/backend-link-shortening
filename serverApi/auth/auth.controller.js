import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import { authModel } from "./auth.model";
import { createControllerProxy } from "../helpers/controllerProxy";

class AuthController {
  validateCredential(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Некоректные данные при регистрации",
      });
    }
    next();
  }

  async registerUser(req, res, next) {
    try {
      const { email, password } = req.body;

      const uniqueUser = await authModel.getUserByEmail(email);

      if (uniqueUser) {
        throw new Error("Такой пользователь уже существует");
      }

      const passwordHashed = await this.passwordHash(password);

      const newUser = {
        email,
        password: passwordHashed,
      };

      await authModel.addNewUser(newUser);

      res.status(201).json(newUser);
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

      console.log(user._id);

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      console.log(token);
    } catch (err) {
      next(err);
    }
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
