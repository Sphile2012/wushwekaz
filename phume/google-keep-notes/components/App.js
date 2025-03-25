import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, { id: Date.now(), content: note }]);
      setNote('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter a note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>

      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note.id}>
            <p>{note.content}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;