// TODO All commented code can be uncommented as the other services 'go live'. right now they will just produce errors
import yelpApiService from "./yelp.api.service";
// import mapsApiService from "./src/maps.api.service";
// import.meta.env.VITE_googleAPI;
// import.meta.env.VITE_yelpAPI;
// import mapsApiService from "./maps.api.service";
import renderService from "./render";

// const mapsAPI = import.meta.env.VITE_googleAPI;
// const yelpAPI = import.meta.env.VITE_yelpAPI;

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const citySearched = event.target.city.value;

    const yelpData = await yelpApiService.getRestaurants(citySearched);
    console.log(yelpData);

    renderService.renderResults(yelpData);

    // const mapData = await mapsApiService.getLocation(citySearched);
    // renderService.renderList(yelpData)

    // renderService.renderMap(mapData)
  });
