import { createControllerProxy } from "../helpers/controllerProxy";
import { linksModel } from "./links.model";

class LinksController {
  async getAllLinks(req, res, next) {
    try {
      const userId = req.user;

      const links = await linksModel.getAllLinks(userId);

      res.status(200).json(links);
    } catch (err) {
      throw new Error(err);
    }
  }

  async createNewLink(req, res, next) {
    try {
      const { name, from } = req.body;

      console.log(name);
      console.log(from);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const linksController = createControllerProxy(new LinksController());
