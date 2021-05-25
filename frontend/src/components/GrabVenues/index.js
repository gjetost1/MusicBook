
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getVenueById} from '../../store/venues'


export default function VenueById(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(id) {
            dispatch(getVenueById(id))
        }
    }, [dispatch, id])

    const venue = useSelector(state => state.venue.venue)
    if (!venue) {
        return null
    }

    return (
        <div>{venue} hello </div>
    )


}
