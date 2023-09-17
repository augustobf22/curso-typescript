import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchema } from "../middlewares/validateJoi";
import schemaMusic from "../schemas/musicSchema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(schemaMusic), musicController.createMusic); // TODO: validação via Joi

export default musicRouter;