import { getRecords, saveRecords } from './storage.js';

const container = document.getElementById('cards-container');

function renderCards() {
  container.innerHTML = '';
  const records = getRecords();

  records.forEach((record, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <h3>${record.description}</h3>
      <p><strong>Amount:</strong> ${record.amount}</p>
      <p><strong>Category:</strong> ${record.category}</p>
      <p><strong>Date:</strong> ${record.date}</p>
      <button data-index="${index}">Delete</button>
    `;

    container.appendChild(card);
  });
}

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const index = e.target.dataset.index;
    const records = getRecords();
    records.splice(index, 1);
    saveRecords(records);
    renderCards();
  }
});

renderCards();
