import "./CSS/App.css";
import React from "react";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Login from "./Components/Login";
import { useStateValue } from "./Context API/StateProvider";
import Author from "./Components/Author";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Author />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
