// TODO All commented code can be uncommented as the other services 'go live'. right now they will just produce errors
// import mapsApiService from "./maps.api.service";
import renderService from "./render";

// const mapsAPI = import.meta.env.VITE_googleAPI;
// const yelpAPI = import.meta.env.VITE_yelpAPI;

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const citySearched = event.target.city.value;

    // const yelpData = await yelpApiService.getLocation(citySearched);

    // const mapData = await mapsApiService.getLocation(citySearched);
    // renderService.renderList(yelpData)

    // renderService.renderMap(mapData)
  });
// citySearched -> into yelpApiService
// citySearched -> into mapsApiService
// run yelpApi -> into renderService
// run mapsApi -> into renderService
//   local storage: save the location searched using the input as the key and value
// document.ready: iterate over localstorage keys. generate button for each key with a text value = saveValue
// on button click, run function = form.submit using text value as the citySearched
