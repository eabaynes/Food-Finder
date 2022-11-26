import renderService from "./render";
import yelpApiService from "./yelp.api.service";

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const citySearched = event.target.city.value;

    // get list of restaurants based on searched city
    const yelpData = await yelpApiService.getRestaurants(citySearched);
    console.log(yelpData);

    const coordinates = yelpData.region.center;

    localStorage.setItem("cityCoords", JSON.stringify(coordinates));
    localStorage.setItem("history", citySearched);

    // display restaurant info in list
    renderService.renderResults(yelpData);
    renderService.renderYelp(yelpData);

    function initMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: {
          lat: yelpData.region.center.latitude,
          lng: yelpData.region.center.longitude,
        },
        zoom: 12,
      });

      // make a marker for each restaurant
      for (let i = 0; i < yelpData.businesses.length; i++) {
        const marker = new google.maps.Marker({
          position: {
            lat: yelpData.businesses[i].coordinates.latitude,
            lng: yelpData.businesses[i].coordinates.longitude,
          },
          map,
          title: yelpData.businesses[i].name,
        });
      }
    }

    initMap();
  });

function initPage() {
  renderService.renderHistory();
}

initPage();

const historyButton = document.querySelector("#history button");

historyButton.addEventListener("click", async function () {
  const citySearched = localStorage.getItem("history");

  // get list of restaurants based on searched city
  const yelpData = await yelpApiService.getRestaurants(citySearched);
  console.log(yelpData);

  // display restaurant info in list
  renderService.renderResults(yelpData);
  renderService.renderYelp(yelpData);

  // render new map from saved coordinates
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: yelpData.region.center.latitude,
        lng: yelpData.region.center.longitude,
      },
      zoom: 12,
    });

    // make a marker for each restaurant
    for (let i = 0; i < yelpData.businesses.length; i++) {
      const marker = new google.maps.Marker({
        position: {
          lat: yelpData.businesses[i].coordinates.latitude,
          lng: yelpData.businesses[i].coordinates.longitude,
        },
        map,
        title: yelpData.businesses[i].name,
      });
    }
  }

  initMap();
});
