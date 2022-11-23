const yelpAPI = import.meta.env.VITE_yelpAPI;
const baseURL = `https://cors-anywhere-bg.herokuapp.com/`;

// TODO: get user input to change location
export default {
  async getRestaurants(input) {
    const response = await fetch(
      `${baseURL}https://api.yelp.com/v3/transactions/delivery/search?location=NYC`,
      {
        headers: {
          Authorization: `Bearer ${yelpAPI}`,
        },
      }
    );
    return response.json();
  },
};
