import db from "../database/db.js";

const collectPassengersTravels =`
  SELECT
    passengers."firstName" || ' ' || passengers."lastName" AS "passenger",
    COUNT(travels."passengerId") AS "travels"
  FROM passengers
  LEFT JOIN travels ON passengers.id = travels."passengerId"`;
const filterName = `
  WHERE passengers."firstName" || ' ' ||
  passengers."lastName" ILIKE $1`;
const groupOrderBy = `GROUP BY "passenger", passengers."firstName", passengers."lastName"
  ORDER BY "travels" DESC`;

async function insertPassenger(firstName, lastName) {
  const query = `INSERT INTO passengers ("firstName", "lastName")
    VALUES ( $1, $2 );`;
  return db.query(query, [firstName, lastName]);
}

async function findPassengerById(passengerId) {
  const query = `SELECT * FROM passengers WHERE id = $1;`;
  const result = await db.query(query, [passengerId]);
  return result.rows[0];
}

async function findAllPassengersTravels() {
  const query = `${collectPassengersTravels}${groupOrderBy};`;
  const result = await db.query(query);
  return result.rows;
}

async function findAllPassengerTravels(name) {
  const query = `${collectPassengersTravels}
    ${filterName}${groupOrderBy};`;
  const result = await db.query(query, [name]);
  return result.rows;
}

export const passengersRepositories = {
  insertPassenger,
  findPassengerById,
  findAllPassengersTravels,
  findAllPassengerTravels
}