import React from "react";
import { PacmanLoader } from "react-spinners";

function LoadingSpinner() {
  return(<div style={{display:"grid", alignContent:"center",justifyContent:"center",height:"100%"}}>
    <PacmanLoader color="#bddcea" />
    </div>);
}

export default LoadingSpinner;