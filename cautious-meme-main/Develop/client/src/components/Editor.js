import React, { useState } from 'react';
import { saveNote } from '../utils/api';

function Editor() {
    const [content, setContent] = useState('');

    const handleSave = async () => {
        try {
            await saveNote({ content });
            alert('Note saved successfully!');
        } catch (error) {
            console.error('Error saving note:', error);
            alert('An error occurred while saving the note.');
        }
    };

    return (
        <div className="Editor">
            <textarea value={content} onChange={e => setContent(e.target.value)} />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default Editor;
