const KEY = 'finance:records';
export function getRecords() {
  return JSON.parse(localStorage.getItem('records') || '[]');
}

export function saveRecords(records) {
  localStorage.setItem('records', JSON.stringify(records));
}


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
