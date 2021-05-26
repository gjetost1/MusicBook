
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Rating, User } = require('../../db/models');

const router = express.Router();


//create rating
router.post('/new', async(req, res) => {

  const { user_id, venue_id, review, rating} = req.body;

  const newRating= await Rating.newRating({user_id, venue_id, review, rating})
  return res.json({
        newRating,
  });
});


//get rating
  router.get('/', asyncHandler(async (req, res) => {
    const ratings = await Rating.findAll( {include: [User]});
    return res.json(ratings);
}));


module.exports = router;
