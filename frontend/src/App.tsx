import { AppShell } from "@mantine/core";
import "./App.css";
import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <AppShell header={<AppHeader />}>
      <Outlet></Outlet>
    </AppShell>
  );
}

export default App;
