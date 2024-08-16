
document.querySelector('#open-search').addEventListener('click', openSearchNetworks);
document.querySelector('#close-search').addEventListener('click', closeSearchNetworks);
document.querySelector('#search-text').addEventListener('input', searchNetworks);

updateCellphoneHour();
setInterval(() => {
  updateCellphoneHour();
}, 1000);

var registeredNetworks = [];
loadData();

function updateCellphoneHour() {
  const cellphoneHour = document.querySelector('#cellphone-hour');
  const currentDateTime = new Date();

  let hour = currentDateTime.getHours().toString();
  if (hour.length === 1) {
    hour = '0' + hour;
  }

  let minute = currentDateTime.getMinutes().toString();
  if (minute.length === 1) {
    minute = '0' + minute;
  }

  cellphoneHour.innerHTML = `${hour}:${minute}`;
}

function loadData() {
  fetch('../data/registered-networks.json')
  .then(response => {
    return response.json();
  })
  .then((data) => {
    registeredNetworks = data.sort((a, b) => {
      return a.daysToDecertify - b.daysToDecertify;
    });

    loadDeaccreditationNetwork();
    searchNetworks();
  });
}

function openSearchNetworks() {
  document.querySelector('#content-home').classList.add('display-none');
  document.querySelector('#content-networks').classList.remove('display-none');;
}

function closeSearchNetworks() {
  document.querySelector('#content-home').classList.remove('display-none');
  document.querySelector('#content-networks').classList.add('display-none');;
}

function loadDeaccreditationNetwork() {
  const networks = document.querySelector('#networks-deaccreditation');

  registeredNetworks
  .filter(x => x.daysToDecertify !== 0)
  .forEach((item) => {
    var classColor = '';
    if (item.daysToDecertify > 0) {
      classColor = 'warning';
    }
    else {
      classColor = 'error';
    }

    networks.innerHTML += `
    <div class="network ${classColor}">
      <div class="network-infos">
        <p>${item.name}</p>
        <p>${item.contact}</p>
      </div>
    ${item.daysToDecertify < 0
      ? `
      <div class="days">
        <p>Descredenciado</p>
      </div>
      `
      : `
      <div class="days">
        <p class="qtd">${item.daysToDecertify}</p>
        <p>dias restantes</p>
      </div>
      `
    }
    </div>`
  });  
}

function searchNetworks() {
  const searchText = document.querySelector('#search-text').value.toLowerCase();
  const searchedNetworks = document.querySelector('#searched-networks');

  searchedNetworks.innerHTML = '';

  registeredNetworks
  .filter(x => x.daysToDecertify >= 0)
  .filter(x => x.name.toLowerCase().includes(searchText) || x.contact.toLowerCase().includes(searchText))
  .forEach((item) => {
    var classColor = '';
    if (item.daysToDecertify > 0) {
      classColor = 'warning';
    }

    searchedNetworks.innerHTML += `
    <div class="network ${classColor}">
      <div class="network-infos">
        <p>${item.name}</p>
        <p>${item.contact}</p>
      </div>
    ${item.daysToDecertify === 0 ? '' : `
      <div class="days">
        <p class="qtd">${item.daysToDecertify}</p>
        <p>dias restantes</p>
      </div>
    `}
    </div>`
  });  
}
