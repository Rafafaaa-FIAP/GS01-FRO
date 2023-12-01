
const menuOptions = document.querySelectorAll('nav [path]');

menuOptions.forEach(element => {
  element.addEventListener('click', changePage);
});

function changePage(event, path) {
  if (!path) {
    path = event.target.getAttribute('path');
  }

  if (window.location.hostname.includes('github.io')) {
    path = '/front' + path;
  }

  window.location = path;
}

function showAlert(message, type) {
  const alertElem = document.querySelector('#alert');
  const alertIcon = alertElem.querySelector('i');
  const alertText = alertElem.querySelector('p');
  
  alertElem.className = '';
  alertIcon.className = '';
  alertIcon.classList.add('bi');

  alertText.innerHTML = message;

  if (type === 'error') {
    alertElem.classList.add('error');
    alertIcon.classList.add('bi-x-circle');
  }
  else if (type === 'success') {
    alertElem.classList.add('success');
    alertIcon.classList.add('bi-check-circle');
  }
  else {
    alertIcon.classList.add('bi-exclamation-circle');
  }

  alertElem.classList.add('shown');
  setTimeout(() => {
    alertElem.classList.remove('shown');
    setTimeout(() => {
      alertText.innerHTML = '';
    }, 300);
  }, 3000);
}
