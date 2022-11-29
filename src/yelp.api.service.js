const baseURL = `https://cors-anywhere-bg.herokuapp.com/`;
const yelpAPI =
  "FY9FXRq5nGT1Y02G12V4h85GFeCoXRIkGbnOqZxOfEOcF89_Me_kxNYd0iZD8cXixIAk6-zwR7OzLbZqhuC0hXipI4GF8aymEjeeoJDWg0vvFX3DCoSrnuE8ueJ2Y3Yx";
// Get user entered city and get restaurants that offer delivery nearby
// NOTE: Yelp API doesn't have full functionality with less populated cities yet
export default {
  async getRestaurants(citySearched) {
    const response = await fetch(
      `${baseURL}https://api.yelp.com/v3/businesses/search?location=${citySearched}&limit=20`,
      {
        headers: {
          Authorization: `Bearer ${yelpAPI}`,
        },
      }
    );
    return response.json();
  },
};
