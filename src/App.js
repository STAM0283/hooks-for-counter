import React, { useState } from "react";
import "./App.css";

function App() {
const [count, setCount] = useState(0);
return (
<div className="App">
<input  type="number"
        value={count}
        onChange ={(event) => setCount(parseInt(event.target.value))} />
<div className= "theButtons">
<button onClick={() => setCount(count + 1)}>Incrémenter +1</button>
<button onClick={() => setCount(count - 1)}>Décrèmenter -1</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
</div>
);
}

export default App;
