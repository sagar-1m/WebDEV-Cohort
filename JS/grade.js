let grade;

// algorithm to determine grade based on score
function gradeCalculator(score) {
  if (score >= 90) {
    return (grade = "A");
  } else if (score >= 80) {
    return (grade = "B");
  } else if (score >= 70) {
    return (grade = "C");
  } else {
    return (grade = "FAIL");
  }
}

console.log(gradeCalculator(88));
