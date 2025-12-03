import React from "react";
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import TopPlayerBar from "./components/TopPlayerBar/TopPlayerBot";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
      <div className="appContainer">
          <Sidebar />
          <TopPlayerBar />
          <HomePage />
      </div>
  );
}

export default App;
