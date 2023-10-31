import status from "http-status";
import { passengersRepositories } from "../repositories/passengers.repositories.js";

export async function postPassenger (req, res) {
  const { firstName, lastName } = req.body;

  await passengersRepositories.insertPassenger(firstName, lastName);

  return res.sendStatus(status.CREATED);
};