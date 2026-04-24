import { useState } from "react";
import { sendData } from "./api";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const arr = input.split(",").map(i => i.trim()).filter(i => i !== "");
      const res = await sendData(arr);
      setResult(res);
    } catch (err) {
      console.error(err);
      setResult({ error: "Failed to connect to backend" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <textarea
        placeholder="A->B, A->C, B->D, C->E, E->F"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        className="submit-btn" 
        onClick={handleSubmit} 
        disabled={loading}
      >
        {loading ? "Loading..." : "Submit"}
      </button>

      {result && (
        <pre className="json-output">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;