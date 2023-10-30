//import { citiesRepositories } from "../repositories/cities.repositories.js";
import { cityExists } from "../services/cities.services.js";

export async function postCity (req, res) {
  const { name } = req.body;

  try {
      await cityExists(name);

      return res.sendStatus(201);
  } catch (error) {
      if (error.name === "conflict") {
        return res.status(409).send({ message: error.message });	
      }
      return res.status(500).send(error);
  };
};