async function processWithDelay(numbers: number[]): Promise<void> {
  if (!Array.isArray(numbers)) {
    throw new Error("Input must be an array");
  }

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      throw new Error(`Element at index ${i} is not a number`);
    }

    // Process the number with a delay of 1 second
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log(numbers[i]); // You can print it in the console or use state to update the UI
        resolve();
      }, 1000)
    );
  }
}
