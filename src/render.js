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
        "mt-1 rounded grid grid-cols-2 flex-wrap justify-items-center bg-amber-500 p-2"
      );
      // append the generated fragment to the document
      resultsList.appendChild(listFragment);
    }
  },
  // function to retrieve data pieces from yelp Data and create list items in renderResults generated fragments
  renderYelp(yelpData) {
    // retrieve newly created HTML by class
    const newULs = document.getElementsByClassName("mt-1");
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
      // For each above variable, generate new list element, add classes, and add text content
      newULs[i].appendChild(
        Object.assign(
          document.createElement("li"),
          { className: "font-bold col-span-2 " },
          { textContent: bizName }
        )
      );
      newULs[i].appendChild(
        Object.assign(document.createElement("li"), {
          textContent: "Cuisine: " + bizType,
        })
      );
      newULs[i].appendChild(
        Object.assign(
          document.createElement("li"),
          { className: "font-semibold" },
          { textContent: bizPrice }
        )
      );
      newULs[i].appendChild(
        Object.assign(
          document.createElement("li"),
          { className: "text-white font-semibold" },
          { textContent: bizPhone }
        )
      );
      newULs[i].appendChild(
        Object.assign(document.createElement("li"), {
          textContent: bizRating + " /5",
        })
      );
    }
  },
};
