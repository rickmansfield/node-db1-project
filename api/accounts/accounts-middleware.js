const Accounts = require ('./accounts-model')

function checkAccountPayload (req, res, next) {
  // DO YOUR MAGIC
}

function checkAccountNameUnique (req, res, next) {
  // DO YOUR MAGIC
}

function checkAccountId (req, res, next) {
  const  { id } = req.params
  Accounts.get(id)
  .then((accounts) => {
    if(accounts){
      req.accounts = accounts
      next()
    } else {
      res.status(404).json({ 
        message: "account not found"
      })
    }
  })
}

module.exports = {checkAccountPayload, checkAccountNameUnique, checkAccountId}