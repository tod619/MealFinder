const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEl = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const single_mealEl = document.getElementById("single-meal");

// Functions
// SearchMeal function which will search for a meal and fetch from api
function searchMeal(e) {
  // Prevent default behaviour
  e.preventDefault();

  console.log("search");
}

// Event Listners
submit.addEventListener("submit", searchMeal);
