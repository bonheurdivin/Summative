import { getRecords } from './state.js';

const input = document.getElementById('search');
const feedback = document.getElementById('search-feedback');
const tbody = document.getElementById('records-table')?.querySelector('tbody');

input?.addEventListener('input', () => {
  const pattern = input.value;
  let re = null;

  try {
    re = new RegExp(pattern, 'i');
    feedback.textContent = '';
  } catch {
    feedback.textContent = 'Invalid regex';
    return;
  }

  const results = getRecords().filter(r =>
    re.test(r.description) || re.test(r.category)
  );

  tbody.innerHTML = '';
  results.forEach(r => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${r.date}</td>
      <td>${highlight(r.description, re)}</td>
      <td>$${Number(r.amount).toFixed(2)}</td>
      <td>${highlight(r.category, re)}</td>
      <td><button data-id="${r.id}" class="delete-btn">Delete</button></td>
    `;
    tbody.appendChild(row);
  });
});

function highlight(text, re) {
  return text.replace(re, match => `<mark>${match}</mark>`);
}
