function showCard(cardNumber) {
  const cards = document.querySelectorAll(".content-box");
  cards.forEach((card) => {
    card.classList.remove("active");
  });
  document.getElementById(`card-${cardNumber}`).classList.add("active");
}

function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  var navThird = document.querySelector(".nav-third");
  var hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("show");
  navThird.classList.toggle("show");

  // Change icon based on menu state
  if (navLinks.classList.contains("show")) {
    hamburger.innerHTML = "✖"; // Cross icon
  } else {
    hamburger.innerHTML = "☰"; // Hamburger icon
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const carouselInner = document.getElementById("cCarousel-inner");
  const items = document.querySelectorAll(".cCarousel-item");

  // Keeps track of the current index
  let currentIndex = 0;
  const totalItems = items.length;

  // Get the width of one carousel item (assuming all items have the same width)
  let itemWidth = items[0].clientWidth;

  // Update itemWidth on window resize (optional for responsiveness)
  window.addEventListener("resize", function () {
    itemWidth = items[0].clientWidth;
    carouselInner.style.transform =
      "translateX(" + -itemWidth * currentIndex + "px)";
  });

  // Function to move the carousel
  function updateCarousel() {
    carouselInner.style.transform =
      "translateX(" + -itemWidth * currentIndex + "px)";
  }

  // Next button functionality
  nextBtn.addEventListener("click", function () {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Wrap back to the first slide
    }
    updateCarousel();
  });

  // Prev button functionality
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalItems - 1; // Go to the last slide
    }
    updateCarousel();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const nextBtn = document.getElementById("nextSlide");
  const prevBtn = document.getElementById("previous");
  const sliderContent = document.getElementById("sliderContent");
  const sliderItems = document.querySelectorAll(".sliderItem");

  // Get the width of a single slider item (assumes all items have the same width)
  let itemWidth = sliderItems[0].offsetWidth;
  let currentIndex = 0;
  const totalItems = sliderItems.length;

  // Optional: update itemWidth on window resize in case of responsiveness
  window.addEventListener("resize", () => {
    itemWidth = sliderItems[0].offsetWidth;
    // Update position in case width has changed
    sliderContent.style.transform =
      "translateX(-" + itemWidth * currentIndex + "px)";
  });

  nextBtn.addEventListener("click", function () {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      sliderContent.style.transform =
        "translateX(-" + itemWidth * currentIndex + "px)";
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      sliderContent.style.transform =
        "translateX(-" + itemWidth * currentIndex + "px)";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".container");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  const cards = sliderContainer.querySelectorAll("div"); // each task card inside .container

  // Calculate card width. Here we assume each card has a fixed width (e.g., 300px) plus the gap.
  // You might need to adjust this calculation based on your actual card dimensions.
  let cardWidth = cards[0].offsetWidth + 10; // 10px is the gap defined in .container { gap: 10px; }

  let currentIndex = 0;
  const totalCards = cards.length;
  const visibleCards = 4; // show 4 images/cards at a time

  // Maximum index to slide (so that we do not slide empty space)
  const maxIndex = totalCards - visibleCards;

  // Next button click
  nextBtn.addEventListener("click", function () {
    if (currentIndex < maxIndex) {
      currentIndex++;
      sliderContainer.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
    }
  });

  // Previous button click
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      sliderContainer.style.transform = `translateX(-${
        currentIndex * cardWidth
      }px)`;
    }
  });

  // Optionally update cardWidth on window resize
  window.addEventListener("resize", function () {
    cardWidth = cards[0].offsetWidth + 10;
    sliderContainer.style.transform = `translateX(-${
      currentIndex * cardWidth
    }px)`;
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".yoga-second-upper-left li");

  listItems.forEach((li) => {
    li.addEventListener("click", function () {
      // Remove 'selected' class from all list items
      listItems.forEach((item) => item.classList.remove("selected"));
      
      // Add 'selected' class to clicked item
      this.classList.add("selected");
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const featureButtons = document.querySelectorAll(".featuresSection .feature");

  featureButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove 'selected' class from all buttons
      featureButtons.forEach((btn) => btn.classList.remove("selected"));
      
      // Add 'selected' class to clicked button
      this.classList.add("selected");

      // Debugging
      console.log("Selected button:", this.innerText);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebarItems = document.querySelectorAll(".sidebar div");

  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove 'selected' class from all items
      sidebarItems.forEach((el) => el.classList.remove("selectedd"));
      
      // Add 'selected' class to clicked item
      this.classList.add("selectedd");
    });
  });
});



