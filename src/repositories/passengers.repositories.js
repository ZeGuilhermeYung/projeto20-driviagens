import db from "../database/db.js";

async function insertPassenger(firstName, lastName) {
  const query = `INSERT INTO passengers ("firstName", "lastName") VALUES ( $1, $2 );`;
  return db.query(query, [firstName, lastName]);
}

export const passengersRepositories = {
  insertPassenger
}