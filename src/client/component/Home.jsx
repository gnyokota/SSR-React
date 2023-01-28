import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Hello from Home Component</h1>
      <button onClick={() => console.log("Pressed")}>Press me!</button>
    </div>
  );
};

export default Home;
