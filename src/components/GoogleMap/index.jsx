import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { getUserLocation } from "../../helpers/getUserLocation.js";
import { v4 as uuidv4 } from "uuid";

// Styles
import styles from "./styles.module.scss";

const GooglePin = ({ text }) => <div>{text}</div>;

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
      {/* <div className={styles.__map}> */}
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
          // onChange={e => setCurrentCenter(e.target.value)}
          onChange={({ center, zoom }) => {
            // setCurrentCenter({ center: center, zoom: zoom });
            console.log("CENTER", center);
            console.log("ZOOM", zoom);
          }}
        >
          <GooglePin
            key={uuidv4()}
            lat={43.26997027608313}
            lng={6.644160284509654}
            text="B&B Italia"
          />
          {currentCenter && (
            <GooglePin
              key={uuidv4()}
              lat={currentCenter.center.lat}
              lng={currentCenter.center.lng}
              text="USER"
            />
          )}
        </GoogleMapReact>
        {/* Bouton centermyLocation */}
      </div>
      {/* </div> */}

      <button onClick={() => centerMyLocation()}>MY LOCATION</button>
    </>
  );
};
export default GoogleMap;
