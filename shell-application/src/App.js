import React from "react";
const Button = React.lazy(() => import("Microfrontend1/Button"));

function App() {
  return (
    <div>
      <h1>Shell Application</h1>
      <Button>Click Here!</Button>
    </div>
  );
}

export default App;
