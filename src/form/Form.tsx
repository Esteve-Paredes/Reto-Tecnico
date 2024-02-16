import { useState } from "react";
import { fetchPost } from "../utils/functions-fetch";
import { URL } from "../utils/variables";
import styles from "./styles.module.css";
import UserError from "./user-error/UserError";

export type DataPerson = {
  row: number;
  name: string;
  email: string;
  age: number;
};

type Data = {
  errors: DataPerson[];
  success: DataPerson[];
};

type Response = {
  ok: boolean;
  data: Data;
};

function Form() {
  const [dataFile, setDataFile] = useState<File | undefined>(undefined);
  const [responseData, setResponseData] = useState<Response | undefined>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (dataFile) {
      formData.append("data-table", dataFile);
      const fetchData = async () => {
        try {
          const response = await fetchPost(URL, "/", formData);
          setResponseData(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  };

  const updateFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setDataFile(event.target.files[0]);
    }
  };
  return (
    <>
      <form
        className={styles.form}
        style={{ display: responseData ? "none" : "flex" }}
        onSubmit={handleSubmit}>
        <input type="file" onChange={updateFile} />
        <button className={styles.button}>Update File</button>
      </form>
      <div
        className={styles.containerBody}
        style={{ display: responseData ? "flex" : "none" }}>
        <div className={styles.containerMessage}>
          <div className={styles.successMessage}>
            {responseData ? responseData.data.success.length : "0"} Records
            uploades successfully
          </div>
          <button className={styles.button}>New File</button>
        </div>
        <div className={styles.containerErrors}>
          <p className={styles.errorsMessage}>
            The ({responseData ? responseData.data.errors.length : "0"}) record
            listed below encountred errors. Please rectify these issues and
            retry.
          </p>
          <table>
            <thead>
              <tr>
                <th>Row</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {!responseData ? (
                <tr></tr>
              ) : (
                responseData.data.errors.map((user, key) => {
                  return <UserError key={key} user={user} />;
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Form;
