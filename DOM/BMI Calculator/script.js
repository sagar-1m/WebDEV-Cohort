document.addEventListener("DOMContentLoaded", () => {
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const calculateButton = document.getElementById("calculate");
  const bmiValue = document.getElementById("bmi-value");
  const bmiCategory = document.getElementById("bmi-category");

  function calculateBMI(height, weight) {
    // Convert height to meters
    const heightInMeters = height / 100;
    // Calculate BMI
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  }

  function validateInput(input) {
    const value = parseFloat(input.value);
    const isValid = !isNaN(value) && value > 0;
    input.classList.toggle("error", !isValid);
    return isValid;
  }

  calculateButton.addEventListener("click", () => {
    // Validate inputs
    const isHeightValid = validateInput(heightInput);
    const isWeightValid = validateInput(weightInput);

    if (!isHeightValid || !isWeightValid) {
      bmiValue.textContent = "-";
      bmiCategory.textContent = "Invalid input";
      return;
    }

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Additional validation for realistic values
    if (height < 50 || height > 300 || weight < 20 || weight > 500) {
      bmiValue.textContent = "-";
      bmiCategory.textContent = "Please enter realistic values";
      return;
    }

    const bmi = calculateBMI(height, weight);
    bmiValue.textContent = bmi;
    bmiCategory.textContent = getBMICategory(parseFloat(bmi));
  });

  // Clear error styling on input
  [heightInput, weightInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("error");
    });
  });
});
