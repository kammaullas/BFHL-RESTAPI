import React, { useState } from "react";
import { sendData } from "./api";
import ResultView from "./components/ResultView";

function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        const arr = input.split(",").map(i => i.trim());
        const res = await sendData(arr);
        setResult(res);
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>BFHL Hierarchy Builder</h2>

            <textarea
                rows="5"
                cols="40"
                placeholder="A->B, B->C"
                onChange={(e) => setInput(e.target.value)}
            />

            <br /><br />

            <button onClick={handleSubmit}>Submit</button>

            {result && <ResultView data={result} />}
        </div>
    );
}

export default App;