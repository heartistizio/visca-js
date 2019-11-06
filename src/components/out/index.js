import axios from "axios";
import React, { useEffect, useState } from "react";

export const Out = async () => {
  const [response, setResponse] = useState();

  const sendRequest = async () => await axios.get("localhost:8080/out");

  useEffect(() => {
    setResponse(sendRequest);
  }, [response]);

  return (
    <>
      <button onClick={sendRequest}>↺</button>
      {response.map(line => (
        <p>{line}</p>
      ))}
    </>
  );
};
