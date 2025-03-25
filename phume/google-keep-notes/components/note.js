import React from "react";

function Note({ content }) {
  return (
    <div className="note">
      <p>{content}</p>
    </div>
  );
}

export default Note;