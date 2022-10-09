const express = require("express");
const cors = require("cors");
const socket = require("socket.io");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

//this lets our front-end at port 3000 make calls to our back-end at port 8000
//taking it awat will result in "cors errors" when attempting your axios calls!
app.use(cors({
    origin: "http://localhost:3000"
}));

require("./config/mongoose.config");

require("./routes/game.routes")(app);

const server = app.listen(8000, () => console.log("You are connected to port 8000"));

const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('socket id: ' + socket.id);
    
    socket.on("event_from_client", data => {
        //listens to for events of type- event_from_client"
        socket.broadcast.emit("Welcome", data);
        //then sends it out a event of type welcome to anyone listening in app.js
        //
    });
});
