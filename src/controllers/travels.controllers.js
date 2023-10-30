import { travelsRepositories } from "../repositories/travels.repositories.js";
import { checkPassengerFlight } from "../services/travels.services.js";

export async function postTravel (req, res) {
  const { passengerId, flightId } = req.body;
  console.log(passengerId, flightId)

  try {
      await checkPassengerFlight(passengerId, flightId);
      console.log("agora aqui")
      await travelsRepositories.insertTravel(passengerId, flightId);

      return res.sendStatus(201);
  } catch (error) {
      if (error.name === "notFound") {
        return res.status(404).send({ message: error.message });	
      }
      return res.status(500).send(error);
  };
};