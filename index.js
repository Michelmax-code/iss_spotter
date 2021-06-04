const { fetchMyIP, fetchCoordsByIP } = require('./iss');
let ip = '';
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned IP:", ip);
});

fetchCoordsByIP(ip, (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Return", coords);
});
/*
//fetchCoordsByIP(fetchMyIP(callback));
// we call th efuction fetchCoordsByIP to get coordinates by ip address
// fetchCoordsByIP(ip,callback) {

// }  */