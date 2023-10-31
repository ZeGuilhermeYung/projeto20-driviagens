import { passengersRepositories } from "../repositories/passengers.repositories.js";

async function filterPassengersTravels (name) {
  let passengersTravels = {};
  
  if (name) {
    passengersTravels = await passengersRepositories.
      findAllPassengerTravels(name);
    return passengersTravels;
  }

  passengersTravels = await passengersRepositories.
    findAllPassengersTravels();
  return passengersTravels;
}

export { filterPassengersTravels };