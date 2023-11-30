
updateCellphoneHour();
setInterval(() => {
  updateCellphoneHour();
}, 1000);

function updateCellphoneHour() {
  const cellphoneHour = document.querySelector('#cellphone-hour');
  const currentDateTime = new Date();

  let hour = currentDateTime.getHours().toString();
  if (hour.length === 1) {
    hour = '0' + hour;
  }

  let minute = currentDateTime.getMinutes().toString();
  if (minute.length === 1) {
    minute = '0' + hour;
  }

  cellphoneHour.innerHTML = `${hour}:${minute}`;
}
