import React from "react";

function App() {
  return (
    <div>
    <div className="App">
     <h1 className="side">Meal finder app</h1>
    </div>
    <div className="input">
    <input type={"text"} placeholder={"type here"} onChange={Dothefunc}></input>
    <button>search</button>
  
    </div>
    </div>
  );
}

export default App;
