const express = require("express");
const path = require("path");

const app = express();
const publicDir = path.join(__dirname, "..", "public");

app.use(express.json());
app.use(express.static(publicDir));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", name: "Dheo Abdul Aziz CV" });
});

// SPA fallback for client-side routes.
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

module.exports = app;
