
const menuOptions = document.querySelectorAll('nav [path]');

menuOptions.forEach(element => {
  element.addEventListener('click', changePage);
});

document.querySelector().getAttribute('tes')

function changePage(event) {
  window.location = event.target.getAttribute('path');
}
