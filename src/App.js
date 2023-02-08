
// import classes from "./App.module.css";
import UCform from "./components/UC/UCform/UCform";
import UCElements from "./components/UC/UCElements/UCElements";
import classes from "./App.module.css"
import React from "react";
import Main from "./components/UC2/Main";
import CardA from "./components/UC2/card/CardA";
// import { useState } from "react";

const UC_elements = UCElements

function App() {
  
  
  return (
    <React.Fragment>
        <header className={classes.header}></header>
        <div className={classes.container}>
          <Main />
        </div>
    </React.Fragment>
  );
  
}

export default App;
