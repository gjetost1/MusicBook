
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRatingById} from '../../store/ratings'


export default function RatingById(){
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getRatingById(id))
    }, [dispatch, id])

    const rating = useSelector(state => state.rating.rating)

    if (!rating) {
        return (
        <div>no rating?</div>
        )
    }

    return (

        <div> rating
            <p>{rating.review}</p>



        </div>

    )


}
