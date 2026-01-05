import { useState } from "react";
import { Button } from "@/components/ui/button";

const CompareDemo = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const compare = async () => {
    const res = await fetch("https://ingredisense-backend.onrender.com/api/compare", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredientsA: a, ingredientsB: b }),
    });
    setResult(await res.json());
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-semibold mb-4">Compare Two Products</h1>

      <textarea
        className="w-full mb-3"
        placeholder="Product A ingredients"
        onChange={(e) => setA(e.target.value)}
      />

      <textarea
        className="w-full mb-3"
        placeholder="Product B ingredients"
        onChange={(e) => setB(e.target.value)}
      />

      <Button onClick={compare}>Compare</Button>

      {result && (
        <pre className="mt-6 text-sm">{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
};

export default CompareDemo;
