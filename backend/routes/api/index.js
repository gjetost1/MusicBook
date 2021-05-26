// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const venuesRouter = require('./venues.js');
const ratingsRouter = require('./ratings.js')



router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

router.use('/venues/:id/rating', ratingsRouter);

router.use('/venues', venuesRouter);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

module.exports = router;
