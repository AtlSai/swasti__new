<<<<<<< HEAD
document
.getElementById("hamburger")
.addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("open");
});


// function showCards(group) {
//     document.querySelectorAll('.card-group').forEach(el => el.classList.add('hidden'));
//     document.querySelector('.group-' + group).classList.remove('hidden');
// }
=======
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


document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
>>>>>>> 54fe0d2 (third commit)
