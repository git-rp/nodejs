console.log('client side js');
fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

const weatherform = document.querySelector('form');
const searchAddress = document.querySelector('input');
weatherform.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = searchAddress.value;
  console.log('submit', location);
  const url = 'http://localhost:3000/weather?address=' + location;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  });
});
