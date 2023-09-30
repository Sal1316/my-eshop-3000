const router = require('express').Router();
const apiRoutes = require('./api'); // should'nt this be more filtered? seem like it should be ./api/index

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;