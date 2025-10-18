const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.get("/api/users", (req, res) => {
  res.json({ users: ["alice", "bob", "charlie"] });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
