
import express  from "express";
import http  from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5000"], 
        methods: ["GET", "POST"],
    },
});

// Store mapping of userId to socket.id
const userSocketMap = {};

// Utility function to get socket ID of a user
 export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

// Socket.io connection handling
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake.query.userId;

    if (userId !== "undefined") {
        userSocketMap[userId] = socket.id;
    }

    // Broadcast current online users to all clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    });
});

export  {
    app,
     io,
    server  
};
