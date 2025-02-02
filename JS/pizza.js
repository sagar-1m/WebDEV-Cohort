let numberOfGuests = 4;

let pizzaSize;

// algorithm to determine pizza size based on number of guests
if (numberOfGuests <= 2) {
  pizzaSize = "small";
} else if (numberOfGuests <= 4) {
  pizzaSize = "medium";
} else {
  pizzaSize = "large";
}

console.log("You should order a " + pizzaSize + " pizza.");
