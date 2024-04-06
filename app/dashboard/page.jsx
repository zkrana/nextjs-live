"use client";
import React, { useState, useEffect } from "react";

function Page() {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    // Fetch data from the serverless function
    fetch("/api/fetch-data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data in the state
        setPetsData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h1 className="text-2xl text-slate-800 uppercase font-semibold pb-2 border-b border-slate-300">
        Hello Pet's
      </h1>
      <div>
        <h2>Pets Data:</h2>
        <ul>
          {petsData.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;
