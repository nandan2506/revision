const fs = require("fs");

const logger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    const log = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms\n`;

    fs.appendFile("./logs.txt", log, (err) => {
      if (err) {
        console.error("Error writing log:", err);
      }
    });
  });

  next(); 
};

module.exports = logger;
