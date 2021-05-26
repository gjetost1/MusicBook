import  csrfFetch from './csrf';

const LOAD = 'rating/LOAD';

const load = rating => ({
    type: LOAD,
    rating
});

export const getRatings = () => async (dispatch) => {
    const res = await csrfFetch(`/api/ratings`);

    if (res.ok) {
        const ratings = await res.json();
        dispatch(load(ratings));
        return ratings;
    };
}

export const getRatingById = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/ratings/${id}`);

    if (res.ok) {
        const rating = await res.json();
        dispatch(load(rating));
        return rating;
    };
};



  const initialState = { }

  const ratingReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD:
            newState = Object.assign({}, state);
            newState.newRating = action.newRating;
            return newState;
        default:
            return state;

    };
};

export default ratingReducer
