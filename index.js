const getQuote = async () => {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data;
}

const form = document.querySelector('#form');
const list = document.querySelector('#weather-list');

const render = (quote) => {
  list.innerHTML = `
    <li>${quote.content}, by ${quote.author}</li>
  `;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const quote = await getQuote();
  render(quote);
}) 