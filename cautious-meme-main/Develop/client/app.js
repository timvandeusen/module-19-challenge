import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import './App.css';

const App = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      try {
        const storedContent = await loadContentFromIndexedDB();
        setContent(storedContent);
      } catch (error) {
        console.error('Error loading content:', error);
      }
    };

    loadContent();
  }, []);
  useEffect(() => {
    const saveContent = async () => {
      try {
        await saveContentToIndexedDB(content);
      } catch (error) {
        console.error('Error saving content:', error);
      }
    };

    saveContent();
  }, [content]);

  return (
    <div className="App">
      <h1>Text Editor</h1>
      <Editor content={content} setContent={setContent} />
    </div>
  );
};

export default App;
