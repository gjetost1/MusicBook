
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVenues} from '../../store/venues'


export default function AllVenues(){

    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(getVenues())
    }, [dispatch])

    const venues = useSelector(state => state.venue.venues)

    if (!venues) {
        return (
        <div>no venue?</div>
        )
    }

    return (

        <div> venue access
            <p>{venues}</p>



        </div>

    )


}
