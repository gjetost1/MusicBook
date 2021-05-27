
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getVenueById, deleteVenue} from '../../store/venues'




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

            {user.id===venue.owner_id?
            <button onClick={handleDelete}>delete</button>:null
        }
        </div>

    )


}
