import React, { useEffect }  from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import './Map.css';
import mapStyles from "./mapStyles"

import {formatRelative} from 'date-fns';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { getVenues} from '../../store/venues'


const libraries = ["places"]
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
};

const center = {
    lat: 44.9778,
    lng: -93.2650
}

const options = {
    styles: mapStyles
}


function MapPage() {

    //dynamic gen
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getVenues())
    }, [dispatch])
    const venues = useSelector(state => state.venue.venue)
    const history = useHistory()
    const handleClick = (venue) => {
        //more keys can be added
        setSelected({
            "id": venue.id,
            "lat": venue.lat,
            "lng": venue.lng,
            "name": venue.name,
            "capacity": venue.capacity,
            "venueType": venue.venueType,
            "pay": venue.pay,
            "city": venue.city,
            "state": venue.state,
            "street": venue.street,
            "description": venue.description,
            "rating": venue.rating
        })
    };

    // {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={()=>{
    //     setSelected(null);
    // }}>


    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyDZhB_aGyFMu_-gQbJsCU7Objjh3WtBcD4',
        libraries,
    });

    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((event) => {
        setMarkers(current => [...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date()
        }])
    },[])

    const mapRef = React.useRef();

    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    },[])

    if (loadError) return "error loading maps"
    if (!isLoaded) return "loading maps"
    if (!venues) return null

    return (<div>
        <GoogleMap
            mapContainerStyle= {mapContainerStyle}
            zoom={10}
            center= {center}
            options = {options}
            onClick={onMapClick}
            onLoad={onMapLoad}

        >
                {/* dynamic gen */}

                {venues?.map(venue => (

                <Marker
                    key={venue.id}
                    position={{ lat: parseInt(venue.lat), lng: parseInt(venue.lng)}}

                    icon={{
                        url: '/pick.svg',
                        scaledSize: new window.google.maps.Size(20,20),
                        labelOrigin: new window.google.maps.Point(30,30),
                        origin: new window.google.maps.Point(0,0),
                        anchor: new window.google.maps.Point(30,10)
                    }}
                    // animation={window.google.maps.Animation.DROP}
                    clickable={true}
                    onClick={() => handleClick(venue)}



                >{selected && selected.id===venue.id ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={()=>{
                    setSelected(null);
                }}>
                    <div>
                        <h2>Venue Info</h2>
                        {/* switch to ul/li */}
                        <p>{selected.name}</p>
                        <p>{selected.capacity}</p>
                        <p>{selected.venueType}</p>
                        <p>{selected.pay}</p>
                        <p>{selected.city}</p>
                        <p>{selected.state}</p>
                        <p>{selected.street}</p>
                        <p>{selected.description}</p>
                        <p>{selected.rating}</p>
                    </div>
                </InfoWindow>) : null}</Marker>
            ))}

            {/* click gen */}
            {/* {markers.map(marker => (
                <Marker
                    key={marker.time.toISOString()}
                    position={{lat: marker.lat, lng: marker.lng}}
                    icon ={{
                        url: '/pick.svg',
                        scaledSize: new window.google.maps.Size(20,20),
                        origin: new window.google.maps.Point(0,0),
                        anchor: new window.google.maps.Point(10,10)
                    }}
                    onClick = {()=> {
                        setSelected(marker)
                    }}
                />
            ))}
            {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={()=>{
                setSelected(null);
            }}>
                <div>
                    <h2>Venue Info</h2>
                    <p>Created {selected.name}</p>
                </div>
            </InfoWindow>) : null} */}
        </GoogleMap>

            <div>Im here too {}</div>


        </div>)

}

export default MapPage;
