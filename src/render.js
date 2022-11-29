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
        "m-1 rounded grid grid-cols-2 justify-center justify-items-center flex-wrap border-2 border-solid border-black bg-amber-500 p-2"
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
      // variable to retrieve the unformatted phone number
      const urlPhone = yelpData.businesses[i].phone;
      // variable to retrieve business phone number in a local display format
      const bizPhone = yelpData.businesses[i].display_phone;
      // variable to retrieve primary cuisine type
      const bizType = yelpData.businesses[i].categories[0].title;
      // variable to retrieve business rating
      const bizRating = yelpData.businesses[i].rating;
      // Variable to retrieve business's yelp page
      const bizPage = yelpData.businesses[i].url;
      // Create an HTML fragment
      const linkFragment = document.createDocumentFragment();
      // Fragment to be created for the business page
      const yelpLink = linkFragment
        .appendChild(document.createElement("h3"))
        .appendChild(document.createElement("a"));
      // Fragment to be created for the business page
      const phoneLink = linkFragment
        .appendChild(document.createElement("li"))
        .appendChild(document.createElement("a"));

      // create a clickable business name that will take a user to a business's yelp page
      newULs[i].appendChild(
        Object.assign(
          yelpLink,
          { href: bizPage },
          { target: "_blank" },
          {
            className:
              "col-span-2 underline decoration-double font-bold hover:text-white",
          },
          { textContent: bizName }
        )
      );
      // append the cuisine type to the page
      newULs[i].appendChild(
        Object.assign(
          document.createElement("li"),
          { className: "row-start-2" },
          { textContent: bizType }
        )
      );
      // append the price range to the page
      newULs[i].appendChild(
        Object.assign(document.createElement("li"), {
          textContent: "Price Range: " + bizPrice,
        })
      );
      // Create nested url that will allow users to make a call straight from the web application.
      newULs[i].appendChild(
        Object.assign(
          phoneLink,
          { href: "tel:" + urlPhone },
          {
            className:
              "text-white font-medium row-start-3 underline hover:text-black",
          },
          { textContent: bizPhone }
        )
      );
      // append the business's rating to the page
      newULs[i].appendChild(
        Object.assign(document.createElement("li"), {
          textContent: "Rating: " + bizRating + " /5",
        })
      );
    }
  },

  // make button from local storage history
  renderHistory(citySearched) {
    // create variable from HTML element with the id"history"
    const historyEl = document.getElementById("history");

    const historyFragment = document.createDocumentFragment();

    const historyList = historyFragment.appendChild(
      document.createElement("button")
    );
    historyList.textContent = localStorage.getItem("history");

    historyEl.setAttribute(
      "class",
      "m-1 rounded bg-amber-500 border-2 font-semibold border-solid border-black text-center hover:bg-yellow-600"
    );

    historyEl.appendChild(historyFragment);
  },
};
