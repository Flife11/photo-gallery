import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.flex}>
      <Link to="/photos">
          <Button variant="contained" size="large">Photo Gallery</Button>
      </Link>
    </div>
  );
}

export default App;
