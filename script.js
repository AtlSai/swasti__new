document
.getElementById("hamburger")
.addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("open");
});


// function showCards(group) {
//     document.querySelectorAll('.card-group').forEach(el => el.classList.add('hidden'));
//     document.querySelector('.group-' + group).classList.remove('hidden');
// }