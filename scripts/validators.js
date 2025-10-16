import { addRecord } from './state.js';

const form = document.getElementById('transaction-form');
const feedback = document.getElementById('form-feedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  const errors = validate(data);

  if (errors.length) {
    feedback.textContent = errors.join(', ');
  } else {
    addRecord(data);
    feedback.textContent = 'Transaction saved!';
    form.reset();
  }
});

function validate({ description, amount, category, date }) {
  const errors = [];
  if (!/^\S(?:.*\S)?$/.test(description)) errors.push('Invalid description');
  if (!/^(0|[1-9]\d*)(\.\d{1,2})?$/.test(amount)) errors.push('Invalid amount');
  if (!/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(category)) errors.push('Invalid category');
  if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date)) errors.push('Invalid date');
  if (/\b(\w+)\s+\1\b/.test(description)) errors.push('Duplicate word in description');
  return errors;
}
