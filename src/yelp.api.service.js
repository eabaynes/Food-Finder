const yelpAPI = import.meta.env.VITE_yelpAPI;
const baseURL = `https://cors-anywhere-bg.herokuapp.com/`;

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
