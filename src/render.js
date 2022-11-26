// varaible from element with id of "results"
const resultsList = document.querySelector("#results");

// exported functions for the index.js
export default {
  // function to iterate through yelp response and create HTML fragments for each business
  renderResults(yelpData) {
    // iterate over returned results from yelp and make nested unordered list
    for (let i = 0; i < yelpData.businesses.length; i++) {
      // create an hmtl fragment
      const listFragment = document.createDocumentFragment();

      // define html fragment
      const nestedList = listFragment
        .appendChild(document.createElement("li"))
        .appendChild(document.createElement("ul"));

      // add CSS classes for tailwind to created UL
      nestedList.setAttribute(
        "class",
        "mt-1 grid grid-cols-3 rounded bg-amber-500 p-2 text-center"
      );
      // append the generated fragment to the document
      resultsList.appendChild(listFragment);
    }
  },
  // function to retrieve data pieces from yelp Data and create list items in renderResults generated fragments
  renderYelp(yelpData) {
    // retrieve newly created HTML by class
    const newULs = document.getElementsByClassName("grid");

    // iterate through the selected HTML
    for (let i = 0; i < newULs.length; i++) {
      // variable to retrieve business name
      const bizName = yelpData.businesses[i].name;
      // variable to retrieve business price range
      const bizPrice = yelpData.businesses[i].price;
      // variable to retrieve business phone number
      const bizPhone = yelpData.businesses[i].display_phone;
      // variable to retrieve primary cuisine type
      const bizType = yelpData.businesses[i].categories[0].title;
      // variable to retrieve business rating
      const bizRating = yelpData.businesses[i].rating;
      // For each above variable, generate new list element and add text content
      newULs[i].appendChild(document.createElement("li")).textContent = bizName;
      newULs[i].appendChild(document.createElement("li")).textContent =
        bizPrice;
      newULs[i].appendChild(document.createElement("li")).textContent =
        bizPhone;
      newULs[i].appendChild(document.createElement("li")).textContent = bizType;
      newULs[i].appendChild(document.createElement("li")).textContent =
        bizRating;
    }
  },

  // make button from local storage history
  renderHistory(citySearched) {
    const historyEl = document.getElementById("history");

    const historyFragment = document.createDocumentFragment();

    const historyList = historyFragment.appendChild(
      document.createElement("button")
    );
    historyList.textContent = localStorage.getItem("history");

    historyEl.setAttribute("class", "rounded bg-amber-500 text-center");

    historyEl.appendChild(historyFragment);
  },
};
