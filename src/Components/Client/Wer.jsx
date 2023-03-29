import React, { useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef } from 'react';

const Wer = () => {
   
    const mapContainer = useRef(null);
var map

const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(0.5);
var mbg=mapboxgl
mbg.accessToken="pk.eyJ1IjoidXNhbWE3ODZhIiwiYSI6ImNsZXZwbDV5ZTF0M3Ezc3Axdmhmb2Z3bmwifQ.b3u24ezWs8--UJphBNY1rA"
useEffect(() => {
    if (map) return; // initialize map only once
    map = new mbg.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [0, 0],
    zoom: zoom,
    projection: 'naturalEarth' // starting projection

    
    });
   
    
    
  return () => {
    
  }
}, []);
  return (
    <div style={{width:'100vw',height:'100vh'}}>


<div ref={mapContainer} id='map' className="map-container"   style={{width:'100vh',height:'100vh'}} />
    </div>
  )
}

export default Wer