import { useState } from "react";
import { DataPerson } from "../Form";
import { PostData } from "../../utils/functions-fetch";
import { URL } from "../../utils/variables";
import styles from "./styles.module.css";

function UserError({ user }: { user: DataPerson }) {
  const userData = {
    name: user.name || "",
    email: user.email || "",
    age: user.age || "",
  };

  const [data, setData] = useState(userData);
  const [response, setResponse] = useState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    try {
      const response = await PostData(URL, "/", data);
      setResponse(response.data.ok);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr>
      <td>{user.row}</td>
      <td>
        <input
          className={styles.input}
          type="text"
          name="name"
          disabled={response}
          value={data.name}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className={styles.input}
          type="text"
          name="email"
          disabled={response}
          value={data.email}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className={styles.input}
          type="text"
          name="age"
          disabled={response}
          value={data.age}
          onChange={handleChange}
        />
      </td>
      <td>
        <button
          className={styles.button}
          onClick={handleClick}
          disabled={response}>
          Retry
        </button>
      </td>
    </tr>
  );
}

export default UserError;
