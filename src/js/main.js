const $navButton = document.querySelector(".navbar__toggle");
const $navigation = document.querySelector(".navbar__nav");
const $closeButton = document.querySelector(".navbar__close");
const $body = document.querySelector("body");

$navButton.addEventListener('click', () => {
  $navigation.classList.add('active');
  $body.classList.add('no-scroll');
})
$closeButton.addEventListener('click', () => {
  $navigation.classList.remove('active');
  $body.classList.remove('no-scroll');
})