import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
const API = process.env.REACT_APP_API_URL;

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch(`${API}`)
      .then((res) => res.text())
      .then((text) => setMessage(text));
  }, []);

  return (
    <div className="App">
      <h1>BUDGET APP</h1>
      <h2>{message ? message : "Waiting..."}</h2>
      <Routes>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
