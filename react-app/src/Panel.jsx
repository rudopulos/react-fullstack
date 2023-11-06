import React from "react";

// Functional Component
export default function Panel({ index }) {
  const title = "Panou Nou";

  return (
    <div>
      <h2>{title}</h2>
      <h3>Index {index} </h3>
      <p>Panel Functional Component</p>
    </div>
  );
}
