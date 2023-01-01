import LoginPage from "./Pages/LoginPage";
import Login from "./Pages/welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const {isAuthenticated} =useAuth0();
  return (
    <Login />
  );
}

export default App;
