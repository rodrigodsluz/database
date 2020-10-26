import React from "react";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Leaflet from 'leaflet';

import mapMakerImg from "../images/map-marker.svg";

import 'leaflet/dist/leaflet.css';
import "../styles/pages/orphanages-map.css";

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [178, 2]
})

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMakerImg} alt="Happy" />

          <h2>Choose an orphanage on the map</h2>
          <p>Many children are waiting for your visit :)</p>
        </header>

        <footer>
          <strong>Itajubá</strong>
          <span>Minas Gerais</span>
        </footer>
      </aside>

      <Map
        center={[-22.4309978,-45.4592248]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}

        <Marker
          icon={mapIcon}
          position={[-22.4309978,-45.4592248]}
         >
           <Popup closeButton={false}minWidth={248} maxWidth={248} className="map-popup">
            Girls house
            <Link to="">
              <FiArrowRight size={20} color="#FFF"/>
            </Link>
           </Popup>
        </Marker>
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size="32" color="#fff" />
      </Link>
    </div>
  ) ;
};

export default OrphanagesMap;
