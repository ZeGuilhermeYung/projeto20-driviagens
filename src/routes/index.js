import { Router } from "express";
import citiesRouter from "./cities.routes.js";
import passsengersRouter from "./passengers.routes.js";
import flightsRouter from "./flights.routes.js";

const router = Router();

router.use(passsengersRouter);
router.use(citiesRouter);
router.use(flightsRouter);

export default router;