import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      
      <body>
        <h1 className="text-3xl font-bold">Thambapanni App</h1>
      </body>
    </>
  );
}

export default App;
