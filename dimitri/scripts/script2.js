const menuBtn =  document.getElementById('menuBtn');
const body = document.body;


menuBtn.addEventListener('click', () => {
  body.classList.toggle("show__menu");
});