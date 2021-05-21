
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Venue, User } = require('../../db/models');

const router = express.Router();


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const venueId = parseInt(req.params.id, 10);
    const venue = await Venue.findByPk(venueId, { include: [User] });
    return res.json(venue);
}));

module.exports = router;
