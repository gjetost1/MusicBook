import React, { useEffect } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import './Map.css';
import mapStyles from "./mapStyles"

import {formatRelative} from 'date-fns';

import {getVenues} from "../../store/venues"
// import {useDispatch} from 'react-redux'
// getVenues()



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
    // const dispatch = useDispatch()

    // useEffect(()=> {
    //     dispatch(getVenues())
    // },[dispatch])


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

    return <div>
        <GoogleMap
            mapContainerStyle= {mapContainerStyle}
            zoom={10}
            center= {center}
            options = {options}
            onClick={onMapClick}
            onLoad={onMapLoad}

        >
            {markers.map(marker => (
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
                    <h2>Venue Listing</h2>
                    <p>Created {formatRelative(selected.time, new Date())}</p>
                </div>
            </InfoWindow>) : null}
        </GoogleMap>
        <div>Im here too {}</div>
        </div>

}

export default MapPage;
