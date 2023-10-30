import db from "../database/db.js";

async function insertPassenger(firstName, lastName) {
  const query = `INSERT INTO passengers ("firstName", "lastName") VALUES ( $1, $2 );`;
  return db.query(query, [firstName, lastName]);
}

async function findPassengerById(passengerId) {
  const query = `SELECT * FROM passengers WHERE id = $1;`;
  const result = await db.query(query, [passengerId]);
  return result.rows[0];
}

export const passengersRepositories = {
  insertPassenger,
  findPassengerById
}