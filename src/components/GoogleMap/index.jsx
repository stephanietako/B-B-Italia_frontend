import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../MarkerGoogle";
import { getUserLocation } from "../../helpers/getUserLocation.js";
import { v4 as uuidv4 } from "uuid";
// Styles
import styles from "./styles.module.scss";
// Icon
import marker from "../../assets/icon/marqueur.svg";

// Google map Pin
const GooglePinUser = ({ name, icon, alt }) => (
  <div className={styles.__googlePin}>
    <img className={styles.__location_icon} src={icon} alt={alt} />
    {name}
  </div>
);

const GoogleMap = () => {
  const [currentCenter, setCurrentCenter] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // User Location
  const centerMyLocation = async () => {
    try {
      await getUserLocation();
      const userLocation = await JSON.parse(
        localStorage.getItem("userLocation")
      );
      setCurrentCenter({
        center: {
          lat: userLocation.lat,
          lng: userLocation.lng,
        },
      });
      console.log("USERLOCATION", userLocation);
    } catch (error) {
      console.error("POSITION NON RÉCUPÉRÉE");
    }
  };
  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          className={styles.react_map}
          defaultCenter={{
            lat: 43.26997027608313,
            lng: 6.644160284509654,
          }}
          defaultZoom={12}
          center={{ lat: 43.26997027608313, lng: 6.644160284509654 }}
          onChange={({ center, zoom }) => {
            console.log("CENTER", center);
            console.log("ZOOM", zoom);
          }}
        >
          <Marker
            lat={43.26997027608313}
            lng={6.644160284509654}
            name="B&B Italia Saint-Tropez"
            color="blue"
            text={"B&B Italia Showroom Saint-tropez"}
            onClick={() => setShowModal(true)}
          />

          {currentCenter && (
            <GooglePinUser
              key={uuidv4()}
              lat={currentCenter.center.lat}
              lng={currentCenter.center.lng}
              icon={marker}
              alt="logo user"
              name="Vous êtes ici"
            />
          )}
        </GoogleMapReact>
      </div>
      <button
        className={styles.__btnPosition}
        onClick={() => centerMyLocation()}
      >
        <img src={marker} alt="logo marker's map" />
      </button>
    </>
  );
};
export default GoogleMap;
