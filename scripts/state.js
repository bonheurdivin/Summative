import { load, save } from './storage.js';

let records = load();

export function getRecords() {
  return [...records];
}

export function addRecord(record) {
  record.id = `txn_${Date.now()}`;
  record.createdAt = new Date().toISOString();
  record.updatedAt = record.createdAt;
  records.push(record);
  save(records);
}

export function updateRecord(id, updates) {
  const index = records.findIndex(r => r.id === id);
  if (index !== -1) {
    records[index] = { ...records[index], ...updates, updatedAt: new Date().toISOString() };
    save(records);
  }
}

export function deleteRecord(id) {
  records = records.filter(r => r.id !== id);
  save(records);
}
