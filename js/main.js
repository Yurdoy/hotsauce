const cookieBanner = document.querySelector(".cookie-banner");
const closeButtons = document.querySelectorAll('[data-action="close"]');

closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    cookieBanner.classList.add("cookie-banner--hidden");
  });
});
