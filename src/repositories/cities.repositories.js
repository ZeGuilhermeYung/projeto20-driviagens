import db from "../database/db.js";

async function insertCity(name) {
  const query = `INSERT INTO cities (name) VALUES ( $1 );`;
  return db.query(query, [name]);
}

async function findCity(name) {
  const query = `SELECT * FROM cities WHERE name = $1;`;
  const result = await db.query(query, [name]);
  return result.rows[0];
}

async function findCityById(cityId) {
  const query = `SELECT * FROM cities WHERE id = $1;`;
  const result = await db.query(query, [cityId]);
  return result.rows[0];
}

export const citiesRepositories = {
  insertCity,
  findCity,
  findCityById
}