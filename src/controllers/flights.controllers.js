import { flightRepositories } from "../repositories/flights.repositories.js";
import { flightIsPossible } from "../services/flights.services.js";

export async function postFlight (req, res) {
  const { origin, destination, date } = req.body;

  try {
      await flightIsPossible(origin, destination, date);

      await flightRepositories.insertFlight(origin, destination, date);

      return res.sendStatus(201);
  } catch (error) {
      if (error.name === "notFound") {
        return res.status(404).send({ message: error.message });	
      }
      if (error.name === "conflict") {
        return res.status(409).send({ message: error.message });	
      }
      if (error.name === "unprocessableEntity") {
        return res.status(422).send({ message: error.message });	
      }
      return res.status(500).send(error);
  };
};