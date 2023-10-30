import { passengersRepositories } from "../repositories/passengers.repositories.js";

export async function postPassenger (req, res) {
  const { firstName, lastName } = req.body;

  try {
      await passengersRepositories.insertPassenger(firstName, lastName);

      return res.sendStatus(201);
  } catch (error) {
      return res.status(500).send(error);
  };
};