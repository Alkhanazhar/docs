import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <div className="bg-zinc-800 text-black w-full h-screen relative">
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
