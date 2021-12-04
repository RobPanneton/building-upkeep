const http = require("http");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cron = require("node-cron");
const { Server } = require("http");

const PORT = 4000;

const app = express();
const server = http.createSever(app);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParrser.json());
app.use(morgan("tiny"));

// cron.schedule("* * * * *", callback);

app.get("*", (req, res) => {
  req.statusCode(404).json({
    status: 404,
    message: "this is not what you were looking for",
  });
});

server.listen(PORT, () => console.info(`Listening on port ${PORT}`));
