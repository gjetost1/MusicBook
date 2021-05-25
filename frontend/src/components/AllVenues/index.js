
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVenues} from '../../store/venues'


export default function AllVenues() {

    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getVenues())
    }, [dispatch])

    const venue = useSelector(state => state.venue.venue)

    if (!venue) {
        return (
        <div>no venue?{venue}</div>
        )
    }

    return (

        <div> venue access
            <p>{venue}</p>



        </div>

    )


}
