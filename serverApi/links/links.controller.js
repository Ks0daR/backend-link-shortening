import { createControllerProxy } from "../helpers/controllerProxy";
import { linksModel } from "./links.model";
import shordId from "shortid";

class LinksController {
  async getAllLinks(req, res, next) {
    try {
      const userId = req.user;

      const links = await linksModel.getAllLinks(userId);

      res.status(200).json(links);
    } catch (err) {
      next(err);
    }
  }

  async createNewLink(req, res, next) {
    try {
      const user = req.user;
      const { from } = req.body;

      const serverLink = process.env.SERVER_URL;

      const code = shordId.generate();

      const shortLink = serverLink + "/to/" + code;

      const createdLink = await linksModel.addNewLink(
        from,
        shortLink,
        code,
        user
      );

      res.status(201).json(createdLink);
    } catch (err) {
      next(err);
    }
  }
  async getLinkById(req, res, next) {
    try {
      const linkId = req.params.id;
      const link = await linksModel.getLinkById(linkId);

      res.status(200).json(link);
    } catch (err) {
      next(err);
    }
  }
}

export const linksController = createControllerProxy(new LinksController());
