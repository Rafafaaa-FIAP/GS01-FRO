function sendEmail() {
  let error = false;

  const name = document.querySelector('#name');
  if (!name.checkValidity()) {
    name.classList.add('invalid');
    error = true;
  }
  else {
    name.classList.remove('invalid');
  }

  const email = document.querySelector('#email');
  if (!email.checkValidity()) {
    email.classList.add('invalid');
    error = true;
  }
  else {
    email.classList.remove('invalid');
  }

  const message = document.querySelector('#message');
  if (!message.checkValidity()) {
    message.classList.add('invalid');
    error = true;
  }
  else {
    message.classList.remove('invalid');
  }

  if (!error) {
    showAlert('Obrigado pelo seu contato!', 'success');
    name.value = '';
    email.value = '';
    message.value = '';
  }
  else {
    showAlert('Dados inválidos!', 'error');
  }
}