const db = require("../../data/db-config")
const getAll = () => {
  //select * from posts
  return db('accounts');
  //remember this returns a promise
  //and so it needs to be hanndled with 
  //.then.catch or async with try/await/catch 
}

const getById = id => {
  //SELECT * FROM accounts WHERE id = some number;
  return db("accounts").where("id", id).first()
}

const create = account => {
  return " wired"
}

const updateById = (id, account) => {
  return " wired"
}

const deleteById = id => {
  return " wired"
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
