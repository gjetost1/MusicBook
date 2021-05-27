
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getVenueById, deleteVenue} from '../../store/venues'
import './GrabVenues.css'




export default function VenueById(){
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
    dispatch(getVenueById(id))
    }, [dispatch, id])

    const venue = useSelector(state => state.venue.venue)

    const user = useSelector(state => state.session.user)

    if (!venue || !user) {
        return (
        <div>no venue?</div>
        )
    }

     const handleDelete = async () => {
        await dispatch(deleteVenue(venue.id))
        history.push('/')
    }

    return (

        <div> Venue Info
            <div className='border'>
               <br></br>
                <p>Venue Name: {venue.name}</p>
                <p>Capacity: {venue.capacity}</p>
                <p>Venue Type: {venue.venueType}</p>
                <p>Pay: ${venue.pay}</p>
                <p>City: {venue.city}</p>
                <p>State: {venue.state}</p>
                <p>Street: {venue.street}</p>
                <p>Description: {venue.description}</p>
                <p>Rating: {venue.rating}</p>

                {user.id===venue.owner_id?
                <button onClick={handleDelete}>delete</button>:null
                }
            </div>
        </div>

    )


}
