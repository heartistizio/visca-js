import React, { useState } from "react";
import { Out } from "../out";
export const CommandLine = () => {
  const [value, setValue] = useState("");
  const [response, _] = useState([]);
  const sendRequest = async () => {
    console.log(value);
    const request = await fetch("http://localhost:8080/control", {
      method: "POST",
      headers: {
        "Content-Type": "plain/text"
      },
      body: value
    });
    console.log(await request.json());
  };
  const handleChange = event => setValue(event.target.value);
  return (
    <>
      <form onSubmit={sendRequest}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Out resp={response} />
    </>
  );
};
