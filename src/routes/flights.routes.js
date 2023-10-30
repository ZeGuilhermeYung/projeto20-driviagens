import { Router } from "express";
//import { createPost, changePost, removePost, getAllflights } from "../controllers/flights.controllers.js";
import validateSchema from "../middlewares/validate.schema.js";
import { flightSchema } from "../schemas/flights.schemas.js";
import { postFlight } from "../controllers/flights.controllers.js";
//import { flightsSchemas, updateflightsSchemas } from "../schemas/flights.schemas.js";

const flightsRouter = Router();

//flightsRouter.get('/flights', validateAuth, getAllflights );
flightsRouter.post('/flights', validateSchema(flightSchema), postFlight);
//flightsRouter.patch('/flights', validateAuth, validateSchema(updateflightsSchemas), changePost);
//flightsRouter.delete('/flights', validateAuth, removePost);


export default flightsRouter;