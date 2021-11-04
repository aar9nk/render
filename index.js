const getWeatherData = async (city) => {
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d746361df4112d4a44339cc2fabd41b`);
   const data = await response.json();
   return data;
}

const form = document.querySelector('#form');
const input = document.querySelector('#city-input');
const list = document.querySelector('#weather-list');

const createWeatherData = (item) => { 
  render(item.main.temp - 270);
}

const createHtml = (text) => {
  return `
    <li class="primary">${text}</li>
  `;
}

const render = (item) => {
  const result = createHtml(item);

  list.innerHTML = result;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const temp = await getWeatherData(input.value);
  createWeatherData(temp);
});