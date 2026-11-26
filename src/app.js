const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", name: "Dheo Abdul Aziz CV" });
});

// Local development: serve static files and SPA fallback.
if (process.env.NODE_ENV !== "production") {
  const publicDir = path.join(__dirname, "..", "public");
  app.use(express.static(publicDir));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
  });
}

module.exports = app;
