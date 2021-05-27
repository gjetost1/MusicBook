
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createVenue } from '../../store/venues'
import './NewVenue.css'


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
       let createdVenue = await dispatch(createVenue(data))

        history.push(`/venues/${createdVenue.venue.id}`)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <p>New Venue Form</p>
            <label for="name">Name:</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}/>

            <label for="capacity">Capacity:</label>
            <input type="text" id="capacity" onChange={(e) => setCapacity(e.target.value)} value={capacity}/>
            <label for="venueType">Venue Type:</label>
            <input type="text" id="venueType" onChange={(e) => setVenueType(e.target.value)} value={venueType}/>

            <label for="pay">Pay:</label>
            <input type="text" id="coordinateY" onChange={(e) => setPay(e.target.value)} value={pay}/>

            <label for="city">City:</label>
            <input type="text" id="city" onChange={(e) => setCity(e.target.value)} value={city}/>

            <label for="state">State:</label>
            <input type="text" id="state" onChange={(e) => setState(e.target.value)} value={state}/>

            <label for="street">Street Address:</label>
            <input type="text" id="street" onChange={(e) => setStreet(e.target.value)} value={street}/>

            <label for="lat">Latitude:</label>
            <input type="text" id="lat" onChange={(e) => setLat(e.target.value)} value={lat}/>

            <label for="lng">Longitude:</label>
            <input type="text" id="lng" onChange={(e) => setLng(e.target.value)} value={lng}/>

            <label for="description">Description:</label>
            <textarea id="description" onChange={(e) => setDescription(e.target.value)} value={description} />

            <label for="rating">Rating:</label>
            <input type="text" id="rating" onChange={(e) => setRating(e.target.value)} value={rating} />

            <button type="submit">Submit</button>

        </form>

    )


}
