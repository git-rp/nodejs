console.log('client side js');
fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

const weatherform = document.querySelector('form');
const searchAddress = document.querySelector('input');
const msg1 = document.querySelector('#message-1');
const msg2 = document.querySelector('#message-2');
//msg1.textContent = 'Js msg';
weatherform.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = searchAddress.value;
  console.log('submit', location);
  const url = 'http://localhost:3000/weather?address=' + location;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        msg2.textContent = data.error;
      } else {
        console.log(data);
        const { address, forcast } = data;
        msg1.textContent =
          'For location ' + address + ' The forcast for tommorow is ' + forcast;
      }
    });
  });
});
