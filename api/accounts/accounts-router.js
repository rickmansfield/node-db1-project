const express = require('express')
const router = express.Router();
const Accounts = require('./accounts-model')

router.get('/', (req, res, next) => {
  try { res.json('get accounts')
    // throw new Error("YIPES")//first test
    //res.json([{}, {}])//secton test
  } catch (err) {
    next(err)
  }

})

router.get('/:id', (req, res, next) => {
  try { res.json('get accounts by id') } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  try { res.json('post accounts') } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  try { res.json('update accounts') } catch (err) {
    next(err)
  }
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
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
