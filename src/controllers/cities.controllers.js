import status from "http-status";
import { citiesRepositories } from "../repositories/cities.repositories.js";
import { cityExists } from "../services/cities.services.js";

export async function postCity (req, res) {
  const { name } = req.body;

  await cityExists(name);

  await citiesRepositories.insertCity(name);

  return res.sendStatus(status.CREATED);
};