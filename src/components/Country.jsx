import { useState } from "react";

function Country() {
    const [location] = useState("United States");
    const [count, setCount] = useState(0)

    return <div className="container">
      <div className="country">
        <h1>{location}</h1>
      </div>
      <div className="count">
        <p>Gold medals: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </div>
}

export default Country;