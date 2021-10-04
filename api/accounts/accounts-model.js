const db = require("../../data/db-config")
const getAll = () => {
  //select * from posts
  return db('accounts');
  //remember this returns a promise
  //and so it needs to be hanndled with 
  //.then.catch or async with try/await/catch 
}

const getByName = name => {
  return db("accounts").where("name", name).first()
}

const getById = id => {
  //SELECT * FROM accounts WHERE id = some number;
  return db("accounts").where("id", id).first()
}

const create = async account => {
  //INSERT INTO accounts (name, budget) values ('somename', 'budget as a number');
  const [id] = await db('accounts').insert(account);
  return getById(id);
};

const updateById = (id, account) => {
  return db('accounts').where('id', id).update(account)
  .then(() => {
    return getById(id)
  })
}

const deleteById = id => {
  //DELETE FROM accounts WHERE id='some number';
  return db('accounts').where('id', id).del()
}  //this  part resolves to the number of deteled records

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
