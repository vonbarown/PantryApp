const db = require("../db");

//retrieving shopping list
const getAllItems = async () =>
  await db.any(`SELECT * FROM shopping_list_items`);

//getting a shopping list by id
const getShoppingListById = async (pantry_id) =>
  await db.any(
    "SELECT * FROM shopping_list_items WHERE (pantry_id = $1) AND completed = false",
    [pantry_id]
  );

// //adding a new item to the shopping list
const addNewItem = async (product, pantry_id, quantity) =>
  await db.one(
    `INSERT INTO shopping_list_items (product,pantry_id,quantity) VALUES($1,$2,$3) RETURNING *`,
    [product, pantry_id, quantity]
  );

module.exports = {
  getAllItems,
  getShoppingListById,
  addNewItem,
};