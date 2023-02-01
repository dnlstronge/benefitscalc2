
// import classes from "./App.module.css";
import UCform from "./components/UC/UCform/UCform";
import UCElements from "./components/UC/UCElements/UCElements";
import classes from "./App.module.css"
import React from "react";
// import { useState } from "react";

const UC_elements = UCElements

function App() {
  // const [USER_UC, setUSER_UC] = useState()
  
  return (
    <React.Fragment>
    <header className={classes.header}></header>
    <div className={classes.main_container}>
      <UCform UC_elements={UC_elements}/>
     
    </div>
    </React.Fragment>
  );
  
}

export default App;
