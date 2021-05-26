
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createVenue } from '../../store/venues'


export default function CreateVenue() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [capacity, setCapacity] = useState(0)
    const [venueType, setVenueType] = useState('')
    const [pay, setPay] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [street, setStreet] = useState('')
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(0)

    const user_id = useSelector(state => state.session.user)
    if(!user_id) return null


    const data = {
        name,
        capacity,
        venueType,
        pay,
        city,
        state,
        street,
        lat,
        lng,
        description,
        owner_id: user_id.id,
        rating
    };

    async function handleSubmit(e){
        e.preventDefault();
       let createVenue = await dispatch(createVenue(data))

        history.push(`/venues/${createVenue.newVenue.id}`)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label for="name">Name:</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}></input>

            <label for="capacity">Capacity:</label>
            <input type="text" id="capacity" onChange={(e) => setCapacity(e.target.value)} value={capacity}></input>

            <label for="venueType">Venue Type:</label>
            <input type="text" id="venueType" onChange={(e) => setVenueType(e.target.value)} value={venueType}></input>

            <label for="pay">Pay:</label>
            <input type="text" id="coordinateY" onChange={(e) => setPay(e.target.value)} value={pay}></input>

            <label for="city">City:</label>
            <input type="text" id="city" onChange={(e) => setCity(e.target.value)} value={city}></input>

            <label for="state">State:</label>
            <input type="text" id="state" onChange={(e) => setState(e.target.value)} value={state}></input>

            <label for="street">Street Address:</label>
            <input type="text" id="street" onChange={(e) => setStreet(e.target.value)} value={street}></input>

            <label for="lat">Latitude:</label>
            <input type="text" id="lat" onChange={(e) => setLat(e.target.value)} value={lat}></input>

            <label for="lng">Longitude:</label>
            <input type="text" id="lng" onChange={(e) => setLng(e.target.value)} value={lng}></input>

            <label for="description">Description:</label>
            <textarea id="description" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>

            <label for="rating">Rating:</label>
            <input type="text" id="rating" onChange={(e) => setRating(e.target.value)} value={rating}></input>

            <button type="submit">Submit</button>

        </form>

    )


}
