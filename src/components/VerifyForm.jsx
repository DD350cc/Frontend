import { useState } from "react";
import {verifyCertificates} from "../api/api";
import ResultCard from "./ResultCard";


export default function VerifyForm() {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const verify = async () => {
        if (!number.trim()) return;

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const res = await verifyCertificates(number);
            setResult(res.data);
        } catch {
            setError("Server error. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    Certificate Verification
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Verify certificates issued by Google & partners
                </p>
            </div>

            <input
                className="border border-gray-300 p-3 w-full rounded-lg mb-4 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             transition"
                placeholder="Enter certificate number (e.g. GOOGLE-DA-001)"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />

            <button
                onClick={verify}
                className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
            >
                {loading ? "Verifying..." : "Verify Certificate"}
            </button>

            {error && <p className="text-red-600 mt-4">{error}</p>}

            {result && <ResultCard result={result} />}
        </div>
    );
}
