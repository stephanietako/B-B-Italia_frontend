export function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position, error) => {
        if (position) {
          localStorage.setItem(
            "userLocation",
            JSON.stringify({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          );
          resolve(position);
        } else {
          reject(error);
        }
      });
    }
  });
}
