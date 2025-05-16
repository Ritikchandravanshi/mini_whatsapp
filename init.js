const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main().then(() => {
    console.log("connection succersfull");
}).catch(err => console.log(err));



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [

{
    from: "gourav",
    to: "raj",
    msg:"come into game",
},

{
    from: "shubham",
    to: "ayush",
    msg:"wait for me",
   
},

{
    from: "tanmay",
    to: "durgesh",
    msg:"i am i college ",

},


];

Chat.insertMany(allChats);