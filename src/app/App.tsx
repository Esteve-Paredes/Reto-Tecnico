import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./styles.module.css";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const objet = localStorage.getItem("user");
    if (objet) {
      if (path === "/login") {
        navigate("/", { replace: true });
      }
    } else {
      if (path === "/") {
        navigate("/login");
      }
    }
  }, [location]);

  return (
    <div className={styles.containerApp}>
      <Outlet />
    </div>
  );
}

export default App;
