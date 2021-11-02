const serverData = {
  weather: [
    {
      temp: 22,
      cloudHeight: 300,
    },
    {
      temp: 27,
      cloudHeight: 300,
    },
    {
      temp: 21,
      cloudHeight: 300,
    },
    {
      temp: 19,
      cloudHeight: 300,
    },
    {
      temp: 18,
      cloudHeight: 300,
    }
  ],
  id: 'whatever12345',
}

let weather = [];

const form = document.querySelector('#form');
const input = document.querySelector('#city-input');
const list = document.querySelector('#weather-list');

const createWeatherData = () => { 
  for(item of serverData.weather) {
    weather.push(item.temp);
  }
}

const createHtml = (text) => {
  return `
    <li class="primary">${text}</li>
  `;
}

const render = (array) => {
  let finalHtml = '';
  for(item of array) {
    finalHtml = finalHtml + createHtml(item);
  }

  list.innerHTML = finalHtml;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  createWeatherData();
  render(weather);
});