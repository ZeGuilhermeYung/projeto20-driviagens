import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import passsengersRouter from "./passengers.routes.js";
import flightsRouter from "./flights.routes.js";
import travelsRouter from "./travels.routes.js";
import errorHandler from "../middlewares/error.handler.js";

const router = Router();

router.use(passsengersRouter);
router.use(citiesRouter);
router.use(flightsRouter);
router.use(travelsRouter);
router.use(errorHandler);

export default router;