import  csrfFetch from './csrf';

const LOAD = 'rating/LOAD';
const CREATE = 'rating/CREATE';
const DELETE = 'rating/DELETE';

const load = rating => ({
    type: LOAD,
    rating
});

const create = rating => ({
    type: CREATE,
    rating
})

const deleter = () => ({
    type: DELETE,
})

export const createRating = (rating) => async (dispatch) => {
    const res = await csrfFetch(`/api/ratings/new`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(rating)

    });
    if(res.ok){
        const rating = await res.json();
        dispatch(create(rating));
        return rating;
    }
};

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

export const deleteRating = () => async (dispatch) => {
    const res = await csrfFetch(`/api/ratings/delete`, {
        method: 'DELETE'
    })
    const rating = await res.json()
    dispatch(deleter(rating))
    return res;
}



  const initialState = { }

  const ratingReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD:
            newState = Object.assign({}, state);
            newState.rating = action.rating;
            return newState;
        case CREATE:
            newState = Object.assign({}, state);
            newState.rating = action.rating
            return newState;
        case DELETE:
            newState = Object.assign({}, state);
            newState.rating = null
            return newState;
        default:
            return state;

    };
};

export default ratingReducer
