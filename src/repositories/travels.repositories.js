import db from "../database/db.js";

async function insertTravel(passengerId, flightId) {
  const query = `
    INSERT INTO travels ("passengerId", "flightId") VALUES ( $1, $2 );`;
  return db.query(query, [passengerId, flightId]);
}

export const travelsRepositories = {
  insertTravel
}