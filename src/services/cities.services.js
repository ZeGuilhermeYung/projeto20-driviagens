import { conflictError } from "../errors/errors.js";
import { citiesRepositories } from "../repositories/cities.repositories.js";

async function cityExists(city) {
  const cityRegistered = await citiesRepositories.findCity(city);

  if (cityRegistered) 
    throw conflictError("Esta cidade já está adicionada ao catálogo!");
}

export { cityExists };