/*
  Weather API CORE @ 2020
  Author: Thiago Jacinto

  Description: connecting to the OpenWeatherAPI
*/

const keychain = 'a13ec42cc6dbb8f4dd28dcd88312d0ca';

export default function retrieveData(location) {

  // URL management: 
  const basicUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;
  const appendKey = `&appid=` + keychain;

  // LAT & LON inputs

  // var latLon = 'lat=' + location.lat + '&lon=' + location.lon;
  // var finalUrl = basicUrl + latLon + appendKey;

  // QUERY input
  var finalUrl = basicUrl + location + appendKey;

  const getInfo = async () => {
    const call = await fetch(finalUrl);

    const response = await call.json();

    console.log(response);
  }

  // var initialResponse = await fetch(finalUrl, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   mode: 'no-cors'
  // })
  //   .then(response => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     return data;
  //   });

  return getInfo;
}
