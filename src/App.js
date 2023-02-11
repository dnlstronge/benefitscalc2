



import classes from "./App.module.css"
import React from "react";
import Main from "./components/UC2/Main";





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
