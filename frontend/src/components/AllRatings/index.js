
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRatings} from '../../store/ratings'


export default function AllVenues() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRatings())
    }, [dispatch])

    const ratings = useSelector(state => state.rating.rating)
    console.log(ratings)

    if(!ratings) {
        return null
    } else {


        return (

            <div> All Venues
                {ratings.map(rating => <div>{rating.id}</div>)}



            </div>

        )
    }


}
