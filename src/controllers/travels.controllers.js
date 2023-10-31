import status from "http-status";
import { travelsRepositories } from "../repositories/travels.repositories.js";
import { checkPassengerFlight } from "../services/travels.services.js";

export async function postTravel (req, res) {
  const { passengerId, flightId } = req.body;

  await checkPassengerFlight(passengerId, flightId);

  await travelsRepositories.insertTravel(passengerId, flightId);

  return res.sendStatus(status.CREATED);
};