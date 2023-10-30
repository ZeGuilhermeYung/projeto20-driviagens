import db from "../database/db.js";

async function insertFlight(origin, destination, date) {
  const query = `
    INSERT INTO flights (origin, destination, date) VALUES ( $1, $2, $3 );`;
  return db.query(query, [origin, destination, date]);
}

export const flightRepositories = {
  insertFlight
}