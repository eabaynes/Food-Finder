export default {
  async getCoords(citySearched) {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${citySearched}&key=AIzaSyD3affXF_hmdvi8EbgZmShTwHcJlX6ZhtU`
    );
    return response.json();
  },
};
