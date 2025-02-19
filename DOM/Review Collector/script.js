document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");
  const stars = document.querySelectorAll(".fa-star");
  let selectedRating = 0;

  // Star rating functionality
  stars.forEach((star) => {
    star.addEventListener("mouseover", function () {
      const rating = this.dataset.rating;
      highlightStars(rating);
    });

    star.addEventListener("click", function () {
      selectedRating = this.dataset.rating;
      highlightStars(selectedRating);
    });

    star.addEventListener("mouseout", function () {
      highlightStars(selectedRating);
    });
  });

  function highlightStars(rating) {
    stars.forEach((star) => {
      const starRating = star.dataset.rating;
      star.classList.toggle("active", starRating <= rating);
    });
  }

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Validate inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const review = document.getElementById("review").value.trim();

    if (!name || !email || !review || !selectedRating) {
      alert("Please fill all fields and select a rating");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Create review card
    const reviewCard = createReviewCard(name, selectedRating, review);
    document.getElementById("reviewsList").prepend(reviewCard);

    // Reset form
    form.reset();
    selectedRating = 0;
    highlightStars(0);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function createReviewCard(name, rating, review) {
    const card = document.createElement("div");
    card.className = "review-card";

    const header = document.createElement("div");
    header.className = "review-header";

    const nameElement = document.createElement("strong");
    nameElement.textContent = name;

    const stars = document.createElement("div");
    stars.className = "review-stars";
    stars.innerHTML = "★".repeat(rating) + "☆".repeat(5 - rating);

    header.appendChild(nameElement);
    header.appendChild(stars);

    const content = document.createElement("div");
    content.className = "review-content";
    content.textContent = review;

    card.appendChild(header);
    card.appendChild(content);

    return card;
  }
});
