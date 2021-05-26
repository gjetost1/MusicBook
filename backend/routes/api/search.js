
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Venue } = require('../../db/models');

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const venues = await Venue.findAll( {include: [User]});
    return res.json(venues);
}));

module.exports = router;
