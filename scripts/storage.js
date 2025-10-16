const KEY = 'finance:records';

export function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
