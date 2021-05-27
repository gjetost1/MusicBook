
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVenues} from '../../store/venues'


export default function AllVenues() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVenues())
    }, [dispatch])

    const venues = useSelector(state => state.venue.venue)
    console.log(venues)

    if (!venues) {
        return null
    } else {


        return (

            <div> All Venues


                {venues.map(venue => <li>{venue.name}</li> )}



            </div>

        )
    }



}
