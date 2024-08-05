document.addEventListener("DOMContentLoaded", () => {
  // Data for the sections
  const preparationData = [
    { title: "Total", time: "Approximately 10 minutes" },
    { title: "Preparation", time: "5 minutes" },
    { title: "Cooking", time: "5 minutes" },
  ];

  const ingredientsData = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];

  const instructionsData = [
    "Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    "Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
    "Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    "Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    "Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    "Enjoy: Serve hot, with additional salt and pepper if needed.",
  ];

  const nutritionData = [
    { name: "Calories", value: "277kcal" },
    { name: "Carbs", value: "0g" },
    { name: "Protein", value: "20g" },
    { name: "Fat", value: "22g" },
  ];

  // Function to render preparation time
  const renderPreparation = () => {
    const preparationContainer = document.querySelector(
      "#preparation .preparation-content ul"
    );
    preparationContainer.innerHTML = preparationData
      .map((item) => `<li><strong>${item.title}: </strong>${item.time}</li>`)
      .join("");
  };

  // Function to render ingredients
  const renderIngredients = () => {
    const ingredientsContainer = document.querySelector(
      ".ingredients-content ul"
    );
    ingredientsContainer.innerHTML = ingredientsData
      .map((ingredient) => `<li>${ingredient}</li>`)
      .join("");
  };

  // Function to render instructions
  const renderInstructions = () => {
    const instructionsContainer = document.querySelector(
      ".instructions-content ol"
    );
    instructionsContainer.innerHTML = instructionsData
      .map((instruction) => `<li>${instruction}</li>`)
      .join("");
  };

  // Function to render nutrition
  const renderNutrition = () => {
    const nutritionContainer = document.querySelector(".nutrition table");
    nutritionContainer.innerHTML = nutritionData
      .map(
        (item) =>
          `<tr><td>${item.name}</td><th><strong>${item.value}</strong></th></tr>`
      )
      .join("");
  };

  // Call the render functions
  renderPreparation();
  renderIngredients();
  renderInstructions();
  renderNutrition();
});

