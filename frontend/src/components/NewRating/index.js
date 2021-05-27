import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createRating } from '../../store/ratings'


export default function CreateRating() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)

    const user_id = useSelector(state => state.session.user)
    if(!user_id) return null


    const data = {
        review,
        rating
    };

    async function handleSubmit(e){
        e.preventDefault();
       let createRating = await dispatch(createRating(data))

        history.push(`/ratings/${createRating.rating.id}`)
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>

            <label for="review">Review:</label>
            <textarea id="review" onChange={(e) => setReview(e.target.value)} value={review}></textarea>

            <label for="rating">Rating:</label>
            <input type="text" id="rating" onChange={(e) => setRating(e.target.value)} value={rating}></input>

            <button type="submit">Submit</button>

        </form>

    )


}
