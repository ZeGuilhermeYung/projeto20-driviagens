import db from "../database/db.js";

async function insertFlight(origin, destination, date) {
  const query = `
    INSERT INTO flights (origin, destination, date) VALUES ( $1, $2, $3 );`;
  return db.query(query, [origin, destination, date]);
}

async function findFlightById(flightId) {
  const query = `SELECT * FROM flights WHERE id = $1;`;
  const result = await db.query(query, [flightId]);
  return result.rows[0];
}

export const flightRepositories = {
  insertFlight,
  findFlightById
}