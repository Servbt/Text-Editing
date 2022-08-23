import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  const jateDB = await openDB('jate', 1);
  const transaction = jateDB.transaction('store', 'readwrite'); 
  const store = transaction.objectStore('contact');
  const request = store.add({ conct: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

export const getDb = async () => {
  const jateDB = await openDB('jate', 1);
  const transaction = jateDB.transaction('contact', 'readonly');
  const store = transaction.objectStore('contact');
  const request = store.getAll();
  const result = await request;
  console.log('result.value: ', result);
  return result;

}

initdb();
