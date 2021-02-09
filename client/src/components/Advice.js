import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function Advice() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const data = response.data.slip.advice;
      setAdvice(data);
      setLoading(false);
    }
    fetchData();
  });

  return (
    <div className="app">
      <div className="card">
        <h2 className="heading">{advice}</h2>
        <button
          className="button"
          onClick={() => {
            setAdvice();
          }}
        >
          Get Mindful Thoughts
        </button>
      </div>
    </div>
  );
}

export default Advice;
