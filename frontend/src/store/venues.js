import { csrfFetch } from './csrf';

const LOAD = 'venue/LOAD';

const load = venue => ({
    type: LOAD,
    venue
});

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
    switch(action.type) {
        case LOAD:
            return action.venue;
        default:
            return state;
    }
};

export default venueReducer;
