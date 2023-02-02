import React from "react";

import "./Home.css";

const Home = ({username}) => {
  return (
    <div>
      <h1 className="home-title">Hello, {username} from Home Component</h1>
      <button onClick={() => console.log("Pressed")}>Press me!</button>
    </div>
  );
};

export default Home;
