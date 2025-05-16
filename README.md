🟢 Mini WhatsApp
A lightweight backend chat service built with Express.js and MongoDB, designed to handle basic chat functionality similar to WhatsApp.
This project enables users to create, update, retrieve,
and delete chat messages with sender and receiver details, along with timestamps for creation and updates.

.

->> Features
-> Create New Chats
Add new chat messages between a sender and a receiver.

-> Update Existing Chats
Modify chat content while preserving creation time and updating the modified time.

-> Timestamps
Every chat includes both createdAt and updatedAt timestamps for easy tracking.

-> Get All Chats
Retrieve a list of all chats stored in the database.

-> Delete Chats
Remove a specific chat permanently from the MongoDB database.

-> Tech Stack
Backend: Express.js

Database: MongoDB + Mongoose



mini_whatsapp/
├── controllers/
│   └── chatController.js
├── models/
│   └── Chat.js
├── routes/
│   └── chatRoutes.js
├── config/
│   └── db.js
├── app.js
├── server.js
└── README.md
