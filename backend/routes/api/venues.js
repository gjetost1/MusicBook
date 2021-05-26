
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Venue, User } = require('../../db/models');

const router = express.Router();

//all venues
router.get('/', asyncHandler(async (req, res) => {
    const venues = await Venue.findAll( {include: [User]});
    return res.json(venues);
}));

//venue by id
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const venueId = parseInt(req.params.id, 10);
    const venue = await Venue.findByPk(venueId, { include: [User] });
    return res.json(venue);
}));

module.exports = router;
