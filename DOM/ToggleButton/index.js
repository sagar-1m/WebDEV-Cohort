function themeChange(color) {
  document.body.style.backgroundColor = color;
} // Function to change the theme of the page based on the color passed as an argument  to the function

const ToggleButton = document.getElementById("theme-change"); // Getting the button element by its id
const heading = document.getElementsByTagName("h1")[0]; // Getting the heading element by its tag name

ToggleButton.addEventListener("click", () => {
  // Adding an event listener to the button element
  const currentColor = document.body.style.backgroundColor; // Getting the current background color of the body element
  if (currentColor === "white" || currentColor === "") {
    // Checking if the current background color is white or empty
    themeChange("black"); // Changing the theme to black
    ToggleButton.innerText = "Light Mode"; // Changing the text of the button to Light Mode
    heading.style.color = "white"; // Changing the color of the heading to white
  } else {
    themeChange("white");
    ToggleButton.innerText = "Dark Mode";
    heading.style.color = "black";
  }
});
