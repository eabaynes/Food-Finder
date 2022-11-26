// todo: function to create Li and nested UL
// varaible from element with id of "results"
const resultsList = document.querySelector("#results");

export default {
  // function to render results from yelpAPI to page
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
  renderYelp(yelpData) {
    const newULs = document.getElementsByClassName("grid");

    for (let i = 0; i < newULs.length; i++) {
      const bizName = yelpData.businesses[i].name;

      const bizPrice = yelpData.businesses[i].price;

      const bizPhone = yelpData.businesses[i].display_phone;

      const bizType = yelpData.businesses[i].categories[0].title;

      const bizRating = yelpData.businesses[i].rating;

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
};
