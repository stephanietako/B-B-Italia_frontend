import React from "react";
import GoogleMapReact from "google-map-react";
import { v4 as uuidv4 } from "uuid";
// Icon
import markerIcon from "../../assets/icon/markerIcon.svg";
// Styles
import styles from "./styles.module.scss";

const Marker = ({ icon }) => (
  <div id="marker">
    {" "}
    <img
      src={markerIcon}
      alt="marker"
      style={{ width: "40px", height: "40px" }}
    />
  </div>
);

const LocationMarker = () => {
  <div className={styles.__markerLocation}>
    <Marker
      center={{ lat: 43.26997027608313, lng: 6.644160284509654 }}
      zoom={12}
    />
    <Marker key={uuidv4()} icon={markerIcon} />
  </div>;
  return <div>COUCOU</div>;
};

export default LocationMarker;
