import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { getUserLocation } from "../../helpers/getUserLocation.js";
import { v4 as uuidv4 } from "uuid";
// Icon
import marker from "../../assets/icon/marqueur.svg";
import markeruser from "../../assets/icon/markerIcon.svg";
// Styles
import styles from "./styles.module.scss";

const GooglePin = ({ text, icon, alt }) => (
  <div className={styles.__googlePin}>
    <img className={styles.__location_icon} src={icon} alt={alt} />
    {text}
  </div>
);

const GoogleMap = () => {
  const [currentCenter, setCurrentCenter] = useState(null);

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
      console.error("POSITION NON RÉCUPÉREE");
    }
  };
  return (
    <>
      {/* Important! Always set the container height explicitly or map will not display */}
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          className={styles.react_map}
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
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
          <GooglePin
            key={uuidv4()}
            lat={43.26997027608313}
            lng={6.644160284509654}
            text=" B&B Italia"
            icon={marker}
            alt="logo BB"
          />
          {currentCenter && (
            <GooglePin
              key={uuidv4()}
              lat={currentCenter.center.lat}
              lng={currentCenter.center.lng}
              text="USER"
              icon={marker}
              alt="logo user"
            />
          )}
        </GoogleMapReact>
      </div>
      <button
        className={styles.__btnPosition}
        onClick={() => centerMyLocation()}
      >
        OÙ SUIS-JE ?
      </button>
    </>
  );
};
export default GoogleMap;
