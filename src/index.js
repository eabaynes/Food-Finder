// TODO All commented code can be uncommented as the other services 'go live'. right now they will just produce errors
import mapsApiService from "./maps.api.service";
import yelpApiService from "./yelp.api.service";

// const mapsAPI = import.meta.env.VITE_googleAPI;
// const yelpAPI = import.meta.env.VITE_yelpAPI;

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const citySearched = event.target.city.value;

    // localStorage.setItem(saveKey, saveValue);
    // console.log(localStorage);
    const yelpData = await yelpApiService.getRestaurants(citySearched);
    console.log(yelpData);

    const mapData = await mapsApiService.getCoords(citySearched);

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: mapData.results[0].geometry.location.lat,
          lng: mapData.results[0].geometry.location.lng,
        },
        zoom: 15,
      });
    }

    initMap();
  });
// citySearched -> into yelpApiService
// citySearched -> into mapsApiService
// run yelpApi -> into renderService
// run mapsApi -> into renderService
//   local storage: save the location searched using the input as the key and value
// document.ready: iterate over localstorage keys. generate button for each key with a text value = saveValue
// on button click, run function = form.submit using text value as the citySearched
