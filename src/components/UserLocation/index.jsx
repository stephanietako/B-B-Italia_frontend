import React, { useState, useEffect } from "react";
import GoogleMap from "../GoogleMap";
// Styles
import styles from "./styles.module.scss";

const UserLocation = () => {
  const [currentPosition, setCurrentPosition] = useState("");

  const locationProps = {
    userLocation: {},
  };

  let getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.currentPosition((position) => {
        setCurrentPosition({
          locationProps: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
        localStorage.setItem(
          "userLocation",
          JSON.stringify({
            lat: locationProps.coords.latitude,
            lng: locationProps.coords.longitude,
          })
        );
      });
    }
  };

  useEffect(() => {
    getUserLocation.setCurrentPosition("");
    return () => {
      console.log("POSITION DU USER", setCurrentPosition);
    };
  }, []);

  return (
    <div className={styles.__userPos}>
      <GoogleMap userLocation={currentPosition} />
    </div>
  );
};

export default UserLocation;
