import React, { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const addNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Notes</h1>
        <div className="note-input">
          <input
            type="text"
            placeholder="Write a note..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button onClick={addNote}>Add Note</button>
        </div>
        <div className="notes-list">
          {notes.map((n, index) => (
            <div key={index} className="note">
              {n}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;