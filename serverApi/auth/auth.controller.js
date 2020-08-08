import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";
import { authModel } from "./auth.model";

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

  //   async registerUser(req, res, next) {
  //     try {
  //       const { email, password } = req.body;

  //       const uniqueUser = await authModel.getUserByEmail(email);

  //       if (uniqueUser) {
  //         throw new Error("Такой пользователь уже существует");
  //       }
  //     } catch (err) {}
  //   }
}

export const authController = new AuthController();
