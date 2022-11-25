// todo: function to create Li and nested UL
const resultsList = document.querySelector("#results ul");

function renderResults(results) {
  for (let i = 0; results.length; i++) {
    resultsList.appendChild("li");
  }
}

export default {};
