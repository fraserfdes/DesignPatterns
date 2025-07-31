const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
const serverReturnsSucces = Math.random() > 0.09; // 90% chance of success
  console.log(
    `Server response: ${serverReturnsSucces} ${
      serverReturnsSucces ? "Success" : "Failure "
    }`
  );
    // Simulate a server response
  if (serverReturnsSucces) {
    res.status(200).send("Hello, World!");
  } else {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app; // Export the app for testing purposes
