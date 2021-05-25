
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getVenueById} from '../../store/venues'


export default function VenueById(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{

            dispatch(getVenueById(id))

    }, [dispatch, id])

    const venue = useSelector(state => state.venue.venue)

    if (!venue) {
        return (
        <div>no venue?</div>
        )
    }

    return (

        <div> venue access
            <p>{venue.name}</p>
             <p>{venue.capacity}</p>
             <p>{venue.venueType}</p>
             <p>{venue.pay}</p>
             <p>{venue.city}</p>
             <p>{venue.state}</p>
             <p>{venue.street}</p>
             <p>{venue.description}</p>
             <p>{venue.rating}</p>


        </div>

    )


}
