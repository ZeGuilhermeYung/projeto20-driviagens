import { Router } from "express";
import validateSchema from "../middlewares/validate.schema.js";
import citySchema from "../schemas/cities.schemas.js";
import { postCity } from "../controllers/cities.controllers.js";

const citiesRouter = Router();

citiesRouter.post('/cities',validateSchema(citySchema), postCity);

export default citiesRouter;