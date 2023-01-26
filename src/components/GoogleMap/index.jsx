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
      <div className={styles.map} style={{ height: "100%", width: "100%" }}>
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
            color="black"
            text={"B&B Italia Showroom Saint-tropez"}
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
      <div className={styles.__btn_box}>
        <button
          className={styles.__btnPosition}
          onClick={() => centerMyLocation()}
        >
          Vous êtes ici
          <img src={marker} alt="logo marker's map" />
        </button>

        <a
          href="https://www.google.fr/maps/dir//B%26B+Italia,+20+Av.+Foch,+83990+Saint-Tropez/@43.2691807,6.6441104,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12cec73e4c7ba6b1:0x8d59750a547f25c!2m2!1d6.6441337!2d43.2692179"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className={styles.__btn_googlemap}>
            Ouvrir dans Google Maps
          </button>
        </a>
      </div>
    </>
  );
};
export default GoogleMap;
