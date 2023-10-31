import db from "../database/db.js";

const findFlights =`SELECT
  f.id,
  c_origin.name AS origin,
  c_destination.name AS destination,
  f.date
  FROM flights AS f
  JOIN cities AS c_origin
  ON f.origin = c_origin.id
  JOIN cities AS c_destination
  ON f.destination = c_destination.id
  ORDER BY date DESC;`;

async function insertFlight(origin, destination, date) {
  const query = `
    INSERT INTO flights (origin, destination, date)
    VALUES ( $1, $2, $3 );`;
  return db.query(query, [origin, destination, date]);
}

async function findFlightById(flightId) {
  const query = `SELECT * FROM flights WHERE id = $1;`;
  const result = await db.query(query, [flightId]);
  return result.rows[0];
}

async function findAllFlights() {
  const query = findFlights;
  const result = await db.query(query);
  return result.rows;
}

export const flightRepositories = {
  insertFlight,
  findFlightById,
  findAllFlights
}