<<<<<<< HEAD
// TODO All commented code can be uncommented as the other services 'go live'. right now they will just produce errors
// import yelpApiService from "./src/yelp.api.service";
// import mapsApiService from "./src/maps.api.service";
// import renderService from "./src/render";

// import.meta.env.VITE_googleAPI;
// import.meta.env.VITE_yelpAPI;

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const citySearched = event.target.city.value;
    console.log(citySearched);

    const saveKey = event.target.city.value;
    const saveValue = event.target.city.value;

    localStorage.setItem(saveKey, saveValue);
    console.log(localStorage);
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
=======

>>>>>>> f5c20b8 (Remove index.js code for merge)
