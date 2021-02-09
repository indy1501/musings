import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h1>Musings</h1>
      <div>{loading ? <div>...loading</div> : <div>{advice}</div>} </div>
      <button
        className="advice-btn"
        onClick={() => {
          setAdvice();
        }}
      >
        Get Mindful Thoughts
      </button>
    </div>
  );
}

export default Advice;
