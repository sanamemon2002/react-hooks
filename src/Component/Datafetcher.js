import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Data Fetcher</h1>
      {loading && <p>Loading...</p>} 
      {error && <p style={{ color: "red" }}>Error: {error}</p>} 
      {!loading && !error && (
        <ul style={{ textAlign: "left", maxWidth: "600px", margin: "auto" }}>
          {data.slice(0, 10).map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>: {item.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
