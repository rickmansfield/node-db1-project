const express = require('express');
const router = express.Router();
const Accounts = require('./accounts-model');
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
} = require('./accounts-middleware');

router.get('/', async (req, res, next) => {
  try {
    const accountsArray = await Accounts.getAll()
    res.json(accountsArray)
    // throw new Error("YIPES")//first test
    //res.json([{}, {}])//secton test
  } catch (err) {
    next(err)
  }
});

router.get('/:id', checkAccountId, (req, res) => {
    res.json(req.account)
});

router.post(
  '/',
  checkAccountPayload,
  checkAccountNameUnique,
  (req, res, next) => {
    try { res.json('post accounts') } catch (err) {
      next(err)
    }
    // DO YOUR MAGIC
  })

router.put(
  '/:id',
  checkAccountId,
  checkAccountPayload,
  checkAccountNameUnique,
  (req, res, next) => {
    try { res.json('update accounts') } catch (err) {
      next(err)
    }
    // DO YOUR MAGIC
  });

router.delete('/:id', checkAccountId, (req, res, next) => {
  try { res.json('delete accounts') } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
