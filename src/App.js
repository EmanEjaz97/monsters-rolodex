import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((users) => {
        setMonsters(users);
        console.log(monsters);
        console.log(users);
      });
    });
  }, []);
  return (
    <div className='App'>
      {monsters.map((monster) => {
        return <h1 key={Math.floor(Math.random() * 10000)}>{monster.name}</h1>;
      })}
    </div>
  );
}

export default App;
