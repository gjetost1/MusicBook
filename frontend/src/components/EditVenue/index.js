import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editVenue, getVenueById } from '../../store/venues';
import { useHistory, useParams } from 'react-router-dom';

import './EditVenue.css';

export default function EditVenue() {
    const {id} = useParams()
    const dispatch = useDispatch();
    const history = useHistory();


    useEffect(()=>{
        dispatch(getVenueById(id))
    }, [dispatch, id])




    const venue = useSelector((state) => state.venue.venue)
    console.log(venue, "venue")

    useEffect(()=>{
        if (venue) {
            setName(venue.name)
            setCapacity(venue.capacity)
            setVenueType(venue.venueType)
            setPay(venue.pay)
            setCity(venue.city)
            setState(venue.state)
            setStreet(venue.street)
            setLat(venue.lat)
            setLng(venue.lng)
            setDescription(venue.description)
            setRating(venue.rating)

        }
    }, [venue])

    const [name, setName] = useState() //(venue?.name)
    const [capacity, setCapacity] = useState()  //(venue?.capacity)
    const [venueType, setVenueType] = useState()  //(venue?.venueType)
    const [pay, setPay] = useState()  // (venue?.pay)
    const [city, setCity] = useState()  //(venue?.city)
    const [state, setState] = useState() //(venue?.state)
    const [street, setStreet] = useState() //(venue?.street)
    const [lat, setLat] = useState() //(venue?.lat)
    const [lng, setLng] = useState() //(venue?.lng)
    const [description, setDescription] = useState() //(venue?.description)
    const [rating, setRating] = useState() //(venue?.rating)

    // if (!venue) {
    //     console.log(venue,'venue')
    //     return (
    //     <div>why no venue?</div>
    //     )
    // }


    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            id,
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
            rating
        };

        // let editedVenue = await dispatch(editVenue(data))
        history.push(`/venues/${id}`)
        return dispatch(editVenue(data))
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <p>Edit Venue Form</p>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name}/>

            <label htmlFor="capacity">Capacity:</label>
            <input type="text" id="capacity" onChange={(e) => setCapacity(e.target.value)} value={capacity}/>

            <label htmlFor="venueType">Venue Type:</label>
            <input type="text" id="venueType" onChange={(e) => setVenueType(e.target.value)} value={venueType}/>

            <label htmlFor="pay">Pay:</label>
            <input type="text" id="coordinateY" onChange={(e) => setPay(e.target.value)} value={pay}/>

            <label htmlFor="city">City:</label>
            <input type="text" id="city" onChange={(e) => setCity(e.target.value)} value={city}/>

            <label htmlFor="state">State:</label>
            <input type="text" id="state" onChange={(e) => setState(e.target.value)} value={state}/>

            <label htmlFor="street">Street Address:</label>
            <input type="text" id="street" onChange={(e) => setStreet(e.target.value)} value={street}/>

            <label htmlFor="lat">Latitude:</label>
            <input type="text" id="lat" onChange={(e) => setLat(e.target.value)} value={lat}/>

            <label htmlFor="lng">Longitude:</label>
            <input type="text" id="lng" onChange={(e) => setLng(e.target.value)} value={lng}/>

            <label htmlFor="description">Description:</label>
            <textarea id="description" onChange={(e) => setDescription(e.target.value)} value={description} />

            <label htmlFor="rating">Rating:</label>
            <input type="text" id="rating" onChange={(e) => setRating(e.target.value)} value={rating} />

            <button type="submit">Submit</button>

        </form>

    )






}
