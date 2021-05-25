import React, { useState } from "react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setError] = useState(false);

  return (
    <div>
      <h1> HomePage</h1>
    </div>
  );
};

export default HomePage;
