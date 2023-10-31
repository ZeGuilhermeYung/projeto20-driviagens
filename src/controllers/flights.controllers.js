import status from "http-status";
import { flightRepositories } from "../repositories/flights.repositories.js";
import { flightIsPossible, mountFlights } from "../services/flights.services.js";

export async function postFlight (req, res) {
  const { origin, destination, date } = req.body;

  await flightIsPossible(origin, destination, date);

  await flightRepositories.insertFlight(origin, destination, date);

  return res.sendStatus(status.CREATED);

};

export async function getFlights (req, res) {
  const { origin, destination } = req.query;

  const allFlights = await flightRepositories.findAllFlights();

  const flights = await mountFlights(allFlights, origin, destination);

  return res.status(status.CREATED).send(flights);
}