import { conflictError, notFound, unprocessableEntity } from "../errors/errors.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";

async function flightIsPossible(origin, destination, date) {
  const originCity = await citiesRepositories.findCityById(origin);
  const destinationCity = await citiesRepositories.findCityById(destination);
  const splitData = date.split("-");
  const flightDate = new Date(splitData[2], splitData[1] - 1, splitData[0]);

  if (!originCity)
    throw notFound("A cidade de origem não existe no banco de dados!");
  if (!destinationCity)
    throw notFound("A cidade de destino não existe no banco de dados!");
  if (origin === destination)
    throw conflictError("Origem e destino não podem ser a mesma cidade!");
  if(flightDate < new Date())
    throw unprocessableEntity("a data não pode ser anterior que a data atual!");
}

export { flightIsPossible };