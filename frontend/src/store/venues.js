import  csrfFetch from './csrf';

const LOAD = 'venue/LOAD';
const CREATE = 'venue/CREATE';
const DELETE = 'venue/DELETE';

const load = venue => ({
    type: LOAD,
    venue
});

const create = venue => ({
    type: CREATE,
    venue
})

const deleter = () => ({
    type: DELETE,

})

export const createVenue = (venue) => async (dispatch) => {
    const res = await csrfFetch(`/api/venues/new`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(venue)

    });
    if(res.ok){
        const venue = await res.json();
        dispatch(create(venue));
        return venue;
    }
};

export const deleteVenue = (venueId) => async (dispatch) => {
    const res = await csrfFetch(`/api/venues/delete/${venueId}`, {
        method: 'DELETE'
    })
    const venue = await res.json()
    dispatch(deleter(venue))
    return res;
}

export const getVenues = () => async (dispatch) => {
    const res = await csrfFetch(`/api/venues`);

    if (res.ok) {
        const venues = await res.json();
        dispatch(load(venues));
        return venues;
    };
}

export const getVenueById = (venueId) => async (dispatch) => {
    const res = await csrfFetch(`/api/venues/${venueId}`);

    if (res.ok) {
        const venue = await res.json();
        dispatch(load(venue));
        return venue;
    };
};


const initialState = {};

const venueReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case LOAD:
            newState = Object.assign({}, state);
            newState.venue = action.venue;
            return newState;
        case CREATE:
            newState = Object.assign({}, state);
            newState.newVenue = action.newVenue;
            return newState;
        case DELETE:
            newState = Object.assign({}, state);
            newState.venue = null;
            return newState;
        default:
            return state;
    }
};

export default venueReducer;
