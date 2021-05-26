import  csrfFetch from './csrf';

const LOAD = 'venue/LOAD';
const CREATE = 'venue/CREATE';

const load = venue => ({
    type: LOAD,
    venue
});

const create = newVenue => ({
    type: CREATE,
    newVenue
})

export const createVenue = (newVenue) => async (dispatch) => {
    const res = await csrfFetch(`/api/venues/new`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newVenue)

    });
    if(res.ok){
        const newVenue = await res.json();
        dispatch(create(newVenue));
        return newVenue;
    }
};

export const getVenues = () => async (dispatch) => {
    const res = await csrfFetch(`/api/venues`);

    if (res.ok) {
        const venues = await res.json();
        dispatch(load(venues));
        return venues;
    };
}

export const getVenueById = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/venues/${id}`);

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
        default:
            return state;
    }
};

export default venueReducer;
