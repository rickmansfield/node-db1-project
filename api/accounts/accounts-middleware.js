const Accounts = require ('./accounts-model')

function checkAccountPayload (req, res, next) {
  console.log('checkAccountPayload');
  const { name, budget } = req.body
  if(name && budget){
    next();
  }else{
    res.status(400).json({ 
      message: "name and budget are required"
    })
  }
}

function checkAccountNameUnique (req, res, next) {
  console.log('checkAccountNameUnique middleware');
  next()
}

async function checkAccountId (req, res, next) {
  console.log('checkAccountId middleware');
  try{
    const account = await Accounts.getById(req.params.id)
    if(account){
      req.account = account
      next()
    }
    else{
      res.status(404).json({message:"account not found"})
    } 
  }catch(err){
    next(err)
  }
}

module.exports = {checkAccountPayload, checkAccountNameUnique, checkAccountId}