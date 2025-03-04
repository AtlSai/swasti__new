// document
// .getElementById("hamburger")
// .addEventListener("click", function () {
//   document.getElementById("nav-links").classList.toggle("open");
// });

// or

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});


function showCard(cardNumber) {
  const cards = document.querySelectorAll('.content-box');
  cards.forEach(card => {
      card.classList.remove('active');
  });
  document.getElementById(`card-${cardNumber}`).classList.add('active');
}



