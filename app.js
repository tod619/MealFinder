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

  // Clear Single Meal
  single_mealEl.innerHTML = "";

  // Get Search Term
  const term = search.value;

  // Check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no results for ${term}. Please try again!</p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              meal => `
            <div class = "meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="meal.idMeal">
                <h3>${meal.strMeal}<h3>

              </div>
            </div>
          `
            )
            .join("");
        }
      });
    // Clear Search Text
    search.value = "";
  } else {
    alert("Please Enter A Search Value!");
  }
}

// Event Listners
submit.addEventListener("submit", searchMeal);
