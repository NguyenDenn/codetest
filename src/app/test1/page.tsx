"use client";
import React, { useEffect, useState } from "react";

async function processWithDelay(
  numbers: number[],
  setProcessedNumbers: (numbers: number[]) => void
): Promise<void> {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  const processed: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      throw new Error(`Element at index ${i} is not a number`);
    }

    // Process the number with a delay of 1 second
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        processed.push(numbers[i]); // Add the current number to the processed list
        setProcessedNumbers([...processed]); // Update the UI with all processed numbers
        resolve();
      }, 1000)
    );
  }
}

export default function Index() {
  const [status, setStatus] = useState<string>("");
  const [processedNumbers, setProcessedNumbers] = useState<number[]>([]);

  useEffect(() => {
    const processNumbers = async () => {
      setStatus("Processing numbers...");
      await processWithDelay([1, 2, 3, 4, 5, 6, 7, 8, 9], setProcessedNumbers);
      setStatus("Processing complete!");
    };

    processNumbers();
  }, []);

  return (
    <div>
      <p>{status}</p>
      <div>
        {processedNumbers.map((num, index) => (
          <p
            key={index}
            className={index === processedNumbers.length - 1 ? "font-bold" : ""}
          >
            {num}
          </p>
        ))}
      </div>
    </div>
  );
}
