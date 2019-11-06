import axios from "axios";
import React, { useState } from "react";

export const CommandLine = async () => {
  const [value, setValue] = useState();

  const sendRequest = () => axios.post("localhost:8080/control", value);
  const handleChange = event => setValue(event.target.value);

  return (
    <form onSubmit={sendRequest}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
