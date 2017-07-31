const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log(req.query)
  let andy = { name: 'Andy', age: 100, cool: true }
  res.render('hello', andy);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('')
  res.send(reverse)
})

module.exports = router;
