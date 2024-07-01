import React from "react";


interface ErrorDisplay {
    error : any, 
    resetErrorBoundary : void;
} 



function fallbackRender({error , resetErrorBoundary} : any ) {
  
    resetErrorBoundary();
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}


export default fallbackRender;
