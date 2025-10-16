import { getRecords } from './state.js';

document.addEventListener('DOMContentLoaded', () => {
  const stats = document.getElementById('stats');
  const table = document.getElementById('records-table')?.querySelector('tbody');

  if (stats) renderStats(stats);
  if (table) renderTable(table);
});

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
