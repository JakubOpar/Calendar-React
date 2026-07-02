import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [dbStatus, setDbStatus] = useState("checking...");

  useEffect(() => {
    async function check() {
      try {
        const res = await invoke<string>("db_test");
        setDbStatus(res);
      } catch (e) {
        setDbStatus("backend error");
      }
    }

    check();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Calendar App (DEV)</h1>
      <p>{dbStatus}</p>
    </div>
  );
}

const styles: { container: React.CSSProperties } = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    background: "#0f0f0f",
    color: "white"
  }
};

export default App;