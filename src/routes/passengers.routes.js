import { Router } from "express";
import validateSchema from "../middlewares/validate.schema.js";
import passengerSchema from "../schemas/passengers.schemas.js";
import { getPassengersTravels, postPassenger } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.get('/passengers/travels', getPassengersTravels);
passengersRouter.post('/passengers', validateSchema(passengerSchema), postPassenger);

export default passengersRouter;