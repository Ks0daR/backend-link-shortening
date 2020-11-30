import express from "express";
import mongoose from "mongoose";
import { authRouter } from "./auth/auth.router";
import { linksRouter } from "./links/links.router";
import { redirectRouter } from "./redirect/redirect.router";
import userCreated from "../firebase";
import cors from "cors";

console.log(userCreated);

const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: "https://shortenlink-dd415.web.app/",
  optionsSuccessStatus: 200,
};

export class ShortLinkServer {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    this.initMiddleware();
    await this.initDbConnect();
    this.initRoutes();
    this.controlError();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddleware() {
    this.server.use(express.json());
  }

  async initDbConnect() {
    try {
      await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Success connect to DB");
    } catch (err) {
      console.log("Error connect to db");
      process.exit(1);
    }
  }

  initRoutes() {
    this.server.use(cors(corsOptions));
    this.server.use("/auth", authRouter);
    this.server.use("/links", linksRouter);
    this.server.use("/to", redirectRouter);
  }

  controlError() {
    this.server.use((err, req, res, next) => {
      // console.log(err);
    });
  }

  startListening() {
    this.server.listen(PORT, () => {
      console.log(`Server started and listens port ${PORT}`);
    });
  }
}
