import { Router } from "express";
import validateSchema from "../middlewares/validate.schema.js";
import { travelSchema } from "../schemas/travels.schemas.js";
import { postTravel } from "../controllers/travels.controllers.js";

const travelsRouter = Router();

//travelsRouter.get('/travels', validateAuth, getAlltravels );
travelsRouter.post('/travels', validateSchema(travelSchema), postTravel);

export default travelsRouter;