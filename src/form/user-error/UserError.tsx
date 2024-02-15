import { useState } from "react";
import { DataPerson } from "../Form";

function UserError({ user }: { user: DataPerson }) {
  const userData = {
    name: user.name || "",
    email: user.email || "",
    age: user.email || "",
  };

  const [data, setData] = useState(userData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  console.log(data);
  return (
    <tr>
      <td>{user.row}</td>
      <td>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
      </td>
      <td>
        <button>Retry</button>
      </td>
    </tr>
  );
}

export default UserError;
