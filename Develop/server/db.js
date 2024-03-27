const idb = require('idb');


const dbPromise = idb.openDB('text-editor-db', 1, {
    upgrade(db) {
     
        db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
    }
});

async function saveNote(note) {
    const db = await dbPromise;
    const tx = db.transaction('notes', 'readwrite');
    const store = tx.objectStore('notes');
    await store.add(note);
    await tx.done;
}


async function getAllNotes() {
    const db = await dbPromise;
    const tx = db.transaction('notes', 'readonly');
    const store = tx.objectStore('notes');
    return store.getAll();
}

module.exports = {
    saveNote,
    getAllNotes
};
