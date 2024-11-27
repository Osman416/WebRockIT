// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

document.querySelector(".carousel-next").addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

document.querySelector(".carousel-prev").addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

function goToSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");
}

// Parallax effect
window.addEventListener("scroll", () => {
  const parallaxElements = document.querySelectorAll(".parallax");
  parallaxElements.forEach((el) => {
    const speed = el.getAttribute("data-speed");
    el.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

// Booking system form validation and submission
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(bookingForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const date = formData.get("date");
  const time = formData.get("time");

  // Validation
  if (!name || !email || !date || !time) {
    alert("Please fill out all fields.");
    return;
  }

  // Send to Formspree (replace 'your-form-id' with your Formspree ID)
  fetch("https://formspree.io/f/your-form-id", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Your booking has been submitted successfully!");
        bookingForm.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Unable to submit the form. Please check your internet connection.");
    });
});

// Contact form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Validation
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Send to Formspree (replace 'your-form-id' with your Formspree ID)
  fetch("https://formspree.io/f/your-form-id", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Your message has been sent successfully!");
        contactForm.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Unable to submit the form. Please check your internet connection.");
    });
});

const form = document.querySelector("#contact-form");
form.addEventListener("submit", (e) => {
    const email = form.querySelector("input[name='email']").value;
    if (!email || !email.includes("@")) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});

