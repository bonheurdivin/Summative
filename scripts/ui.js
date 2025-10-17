import { getRecords } from './state.js';

document.addEventListener('DOMContentLoaded', () => {
  const stats = document.getElementById('stats');
  const table = document.getElementById('records-table')?.querySelector('tbody');
  const container = document.getElementById('cards-container');
  
  if (stats) renderStats(stats);
  if (table) renderTable(table);
});

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

function renderStats(container) {
  const data = getRecords();
  const total = data.length;
  const sum = data.reduce((acc, r) => acc + Number(r.amount), 0).toFixed(2);
  const topCategory = [...data.reduce((map, r) => {
    map.set(r.category, (map.get(r.category) || 0) + 1);
    return map;
  }, new Map())].sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

  container.innerHTML = `
    <p>Total Records: ${total}</p>
    <p>Total Spent: $${sum}</p>
    <p>Top Category: ${topCategory}</p>
  `;
}

function renderTable(tbody) {
  const data = getRecords();
  tbody.innerHTML = '';
  data.forEach(r => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${r.date}</td>
      <td>${r.description}</td>
      <td>$${Number(r.amount).toFixed(2)}</td>
      <td>${r.category}</td>
      <td>
        <button data-id="${r.id}" class="delete-btn">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });

  tbody.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
      const id = e.target.dataset.id;
      import('./state.js').then(({ deleteRecord }) => {
        deleteRecord(id);
        renderTable(tbody);
      });
    }
  });
}
