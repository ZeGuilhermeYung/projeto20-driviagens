import { Router } from "express";
import validateSchema from "../middlewares/validate.schema.js";
import { flightSchema } from "../schemas/flights.schemas.js";
import { postFlight, getFlights } from "../controllers/flights.controllers.js";

const flightsRouter = Router();

flightsRouter.get('/flights', getFlights );
flightsRouter.post('/flights', validateSchema(flightSchema), postFlight);

export default flightsRouter;