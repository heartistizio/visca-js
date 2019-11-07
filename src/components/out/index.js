import React, { useEffect, useState } from "react";

export const Out = ({ resp = [] }) => {
  const [response, setResponse] = useState(resp);

  const handleClick = async () => {
    const response = await fetch("http://localhost:8080/control");
    const myJson = await response.json();
    setResponse(await myJson);
  };

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8080/control");
      const myJson = await response.json();
      setResponse(await myJson);
    };
    sendRequest();
  }, []);

  return (
    <>
      <button onClick={handleClick}>↺</button>
      {response.map(line => (
        <p>{line}</p>
      ))}
    </>
  );
};
