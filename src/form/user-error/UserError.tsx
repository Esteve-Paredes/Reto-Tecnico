import { useState } from "react";
import { DataPerson } from "../Form";
import { fetchPost } from "../../utils/functions-fetch";
import { URL } from "../../utils/variables";

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
      const response = await fetchPost(URL, "/", data);
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
          type="text"
          name="name"
          disabled={response}
          value={data.name}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          disabled={response}
          value={data.email}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="age"
          disabled={response}
          value={data.age}
          onChange={handleChange}
        />
      </td>
      <td>
        <button onClick={handleClick} disabled={response}>
          Retry
        </button>
      </td>
    </tr>
  );
}

export default UserError;
