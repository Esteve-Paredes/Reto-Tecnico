import React, { useState } from "react";
import "./App.css";
import Papa, { ParseResult } from "papaparse";
import axios from "axios";

type DataPerson = {
  Name: string;
  Email: string;
  Age: number;
};

type Result = {
  data: DataPerson;
  error: [];
  meta: object;
};

function App() {
  const [dataFile, setDataFile] = useState<Result | undefined>(undefined);
  const [responseData, setResponseData] = useState<DataPerson[]>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post("/", dataFile);
        setResponseData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  const updateFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      Papa.parse(event.target.files[0], {
        header: true,
        dynamicTyping: true,
        complete: function (results: ParseResult<Result>) {
          setDataFile(results.data);
        },
      });
    }
  };
  console.log(dataFile);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={updateFile} />
        <button>Update File</button>
      </form>
    </>
  );
}

export default App;
