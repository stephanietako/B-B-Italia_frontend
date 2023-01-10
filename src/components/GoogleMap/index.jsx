import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./styles.module.scss";

const GooglePin = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 43.26997027608313,
      lng: 6.644160284509654,
    },
    zoom: 12,
  };

  return (
    // Important! Always set the container height explicitly or map will not display
    // <div style={{ height: "100vh", width: "100%" }}>
    <div style={{ height: 400, width: 500, margin: "auto", marginTop: 40 }}>
      <GoogleMapReact
        className={styles.react_map}
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        // center={{}}
      >
        <GooglePin
          lat={43.26997027608313}
          lng={6.644160284509654}
          text="B&B Italia Showroom Saint-Tropez"
        />
      </GoogleMapReact>
      <div className={styles.windowBubble}>WINDOW ICI</div>
    </div>
    // The marker, positioned at Uluru
  );
};
export default GoogleMap;
