import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import './Map.css';
import mapStyles from "./mapStyles"

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
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyDZhB_aGyFMu_-gQbJsCU7Objjh3WtBcD4',
        libraries,
    });

    if (loadError) return "error loading maps"
    if (!isLoaded) return "loading maps"

    return <div>
        <GoogleMap
            mapContainerStyle= {mapContainerStyle}
            zoom={10}
            center= {center}
            options = {options}

        >
        </GoogleMap>
        </div>

}

export default MapPage;
