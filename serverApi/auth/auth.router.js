import { Router } from "express";
import { authController } from "./auth.controller";
import { check } from "express-validator";
import { authModel } from "./auth.model";

const router = Router();

router.post(
  "/register",
  [
    check("email", "Не корректный email").isEmail(),
    check("password", "Не корректный пароль").isLength({ min: 6 }),
  ],
  authController.validateCredential,
  authController.registerUser
);

router.post(
  "/login",
  [
    check("email", "Не корректный email").isEmail(),
    check("password", "Не корректный пароль").isLength({ min: 6 }),
  ],
  authController.validateCredential,
  authController.logInUser
);

router.put("/logout", authController.isAutorizate, authController.logOutUser);

export const authRouter = router;
