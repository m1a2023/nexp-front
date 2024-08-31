//test api service
"use client";
import React, { useEffect, useState } from "react";
import { apikey } from "../apitest/page";

export default function Develop() {
  const [ratesData, setRatesData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apikey)
      .then((response) => response.json())
      .then((data) => setRatesData(data))
      .catch((error) => setError("Failed to load data"));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!ratesData) {
    return <div>Loading...</div>;
  }

  const { base_code, conversion_rates } = ratesData;

  return (
    <div className="flex justify-center h-full w-full">
      <div className="text-black">
        <h1>Api data information</h1>
        <h2>base currency: {base_code}</h2>
        <ul>
          {Object.entries(conversion_rates).map(([currency, rate]) => (
            <li key="currency">
              {currency}: {rate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
