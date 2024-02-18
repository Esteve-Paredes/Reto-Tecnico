import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchPost } from "../utils/functions-fetch";
import { URL } from "../utils/variables";

const initialFormData = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const [validCredentials, serValidCredentials] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetchPost(URL, "/login", formData);

    if (response.data?.ok === true) {
      localStorage.setItem("user", JSON.stringify(response?.data.data));
      navigate("/");
    } else {
      serValidCredentials(true);
      console.error("Usuario no encontrado");
    }
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    const nextFormData = { ...formData, [name]: value };
    setFormData(nextFormData);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sistema de Carga de Datos</h1>
      <form className={styles.formulario} onSubmit={onSubmit}>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.containerInput}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className={styles.button}>Login</button>
      </form>
      {validCredentials && (
        <span className={styles.errorMessage}>Invalid Credentials</span>
      )}
    </div>
  );
}

export default Login;
