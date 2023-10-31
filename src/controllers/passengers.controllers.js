import status from "http-status";
import { passengersRepositories } from "../repositories/passengers.repositories.js";
import { filterPassengersTravels } from "../services/passengers.services.js";

export async function postPassenger (req, res) {
  const { firstName, lastName } = req.body;

  await passengersRepositories.insertPassenger(firstName, lastName);

  return res.sendStatus(status.CREATED);
};

export async function getPassengersTravels (req, res) {
  const { name } = req.query;

 const passengersTravels = await filterPassengersTravels(name);

  return res.status(status.CREATED).send(passengersTravels);
};