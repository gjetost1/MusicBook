
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

//create venue
router.post('/new', asyncHandler (async(req, res) => {

    const {
        name,
        owner_id,
        capacity,
        venueType,
        pay,
        city,
        state,
        street,
        lat,
        lng,
        description,
        rating
    } = req.body;

    const venue = await Venue.create( req.body )
    return res.json({
     venue,
    });
}));

//edit venue
router.patch('/edit/:id', asyncHandler(async (req, res)=>{
    const venueId = parseInt(req.params.id, 10);

    const venueToEdit = await Venue.findByPk(venueId, { include: [User] })

    await venueToEdit.update(req.body)
    return res.json(venueToEdit)
}))

//delete venue
router.delete('/delete/:id(\\d+)', asyncHandler(async (req, res) => {
    const venueId = parseInt(req.params.id, 10);
    const venueToDelete = await Venue.findByPk(venueId);

    await venueToDelete.destroy()

    return res.json(venueId)
}))

module.exports = router;
