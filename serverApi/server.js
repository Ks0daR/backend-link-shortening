import express from "express";
import mongoose from "mongoose";
import { authRouter } from "./auth/auth.router";

const PORT = process.env.PORT || 8080;

export class ShortLinkServer {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    this.initMiddleware();
    await this.initDbConnect();
    this.initRoutes();
    // this.controlError();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }

  initMiddleware() {
    this.server.use(express.json());
  }

  async initDbConnect() {
   
    await mongoose.connect(process.env.MONGO_DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, });
  }

  initRoutes() {
    this.server.use("/auth", authRouter);
  }

  startListening() {
    this.server.listen(PORT, () => {
      console.log(`Server started and listens port ${PORT}`);
    });
  }
}
