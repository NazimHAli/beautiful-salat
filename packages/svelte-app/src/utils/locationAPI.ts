const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos: { coords: any }) {
  const positionCoordinates = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${positionCoordinates.latitude}`);
  console.log(`Longitude: ${positionCoordinates.longitude}`);
  console.log(`More or less ${positionCoordinates.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options);
}

export { getCurrentLocation };
