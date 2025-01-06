import React from "react";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="bg-slate-400">
      <h1 className=" flex underline decoration-dotted decoration-8 justify-center my-10 p-5 bg-slate-500 text-c">
        GIT STARE
      </h1>

      <Body />
      <Footer />
    </div>
  );
};

export default App;
