// variables

const ageYear = {
  Human: 1,
  Cat: 15,
  Dog: 7,
  Goat: 10,
  Rabbit: 8.5,
  Chicken: 5,
};

const petAge = document.getElementById("pet-age");
const petAgeConverted = document.getElementById("pet-age-converted");

const fromAnimal = document.getElementById("from-animal");

function ageConverter(humanYears, selectedAnimal) {
  let conversionFactor = ageYear[selectedAnimal];
  let petYears = humanYears * conversionFactor;
  return petYears;
}

fromAnimal.addEventListener("change", function () {
  let selectedAnimal = this.value;
  let humanYears = petAge.value;
  let petYears = ageConverter(humanYears, selectedAnimal);
  petAgeConverted.value = petYears;
});

// json fetching
fetch("animalfacts.json")
  .then((response) => response.json())
  .then((data) => {
    document
      .getElementById("humanBTN")
      .addEventListener("click", function (event) {
        event.preventDefault();

        let facts = data[0].Human;
        let randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("humanCard").textContent = randomFact;
      });
    document
      .getElementById("animalBTN")
      .addEventListener("click", function (event) {
        event.preventDefault();

        let facts = data[1].Animal;
        let randomFact = facts[Math.floor(Math.random() * facts.length)];
        document.getElementById("animalCard").textContent = randomFact;
      });
  });
