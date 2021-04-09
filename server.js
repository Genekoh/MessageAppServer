const express = require("express");
const cors = require("cors");

const router = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const server = app.listen(3000);
const io = require("./socket.js").init(server);

io.on("connection", (socket) => {
    console.log("A client has connected");
});
