const axios = require("axios");
const CircuitBreaker = require("opossum");

const callAPI = async () => {
  try {
    const response = await axios.get("http://localhost:3000/");
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : "Network Error");
  }
};

const breaker = new CircuitBreaker(callAPI, {
  timeout: 3000, // Timeout after 3 seconds
  errorThresholdPercentage: 50, // Open circuit if 50% of requests fail
  resetTimeout: 10000, // Reset circuit after 10 seconds
});

breaker.fallback(() => "Service Unavailable"); // Fallback response

breaker.on("open", () => {
  console.log("Circuit is open, requests will be short-circuited");
}); 

breaker.on("close", () => {
  console.log("Circuit is closed, requests will be sent to the server");
});

const run = async () => {
  try {
    for (let i = 0; i < 1500; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const result = await breaker.fire();
      console.log(result);
      console.log("\n\n\n");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

run();
