import { notFound } from "../errors/errors.js";
import { flightRepositories } from "../repositories/flights.repositories.js";
import { passengersRepositories } from "../repositories/passengers.repositories.js";

async function checkPassengerFlight(passengerId, flightId) {
  console.log("cheguei aqui")
  const passenger = await passengersRepositories.findPassengerById(passengerId);
  const flight = await flightRepositories.findFlightById(flightId);

  if (!passenger)
    throw notFound("O passageiro não existe no banco de dados!");
  if (!flight)
    throw notFound("O vôo não existe no banco de dados!");
}

export { checkPassengerFlight };