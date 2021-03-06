import  csrfFetch from './csrf';

const LOAD = 'venue/LOAD';
const CREATE = 'venue/CREATE';
const DELETE = 'venue/DELETE';
const EDIT = 'venue/EDIT';

const load = venue => ({
    type: LOAD,
    venue
});

const create = venue => ({
    type: CREATE,
    venue
})

const deleter = (venueId) => ({
    type: DELETE,
    venueId

})

const edit = (venue) => ({
    type: EDIT,
    venue
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

export const editVenue = (data) => async (dispatch) => {

    const res = await csrfFetch(`/api/venues/edit/${data.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)


    });
    if (res.ok) {
        const venue = await res.json();
        dispatch(edit(venue));
        return venue;
    };
};

export const deleteVenue = (venueId) => async (dispatch) => {
    const res = await csrfFetch(`/api/venues/delete/${venueId}`, {
        method: 'DELETE'
    })
    const data = await res.json()
    dispatch(deleter(venueId))
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
            newState.venue = [];
            return newState;
        default:
            return state;
    }
};

export default venueReducer;
