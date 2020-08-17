import { createControllerProxy } from "../helpers/controllerProxy";
import { linksModel } from "../links/links.model";

class RedirectController {
  async redirectToShortLink(req, res, next) {
    try {
      const code = req.params.code;
      const link = await linksModel.getLinkByCode(code);

      if (!link) {
        res.status(404).json("Ссылка не найдена");
      }

      link.clicks += 1;
      await link.save();
      return res.redirect(link.from);
    
    } catch (err) {
      next(err);
    }
  }
}

export const redirectController = createControllerProxy(
  new RedirectController()
);
