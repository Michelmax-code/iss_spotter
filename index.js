const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
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

//const { fetchISSFlyOverTimes } = require('./iss');

const coords = { latitude: '43.8113', longitude: '-79.188' };

fetchISSFlyOverTimes(coords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});


/*
//fetchCoordsByIP(fetchMyIP(callback));
// we call th efuction fetchCoordsByIP to get coordinates by ip address
// fetchCoordsByIP(ip,callback) {

// }  */