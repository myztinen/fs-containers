const express = require('express');
const redis = require('../redis')
const router = express.Router();

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics. */
router.get('/statistics', async (_, res) => {
  const amount = await redis.get("added_todos");
  res.json({ "added_todos": Number(amount) });
})


module.exports = router;
