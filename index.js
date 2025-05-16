const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

const path = require("path");
const Chat = require("./models/chat.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
main().then(() => {
    console.log("connection succersfull");
}).catch(err => console.log(err));



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.get("/", (req, res) => {
    res.send("working fine ");
})

//index route

app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
})

app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/chats/new", (req, res) => {
    let { from, msg, to } = req.body;
    let newChats = new Chat({
        from: from,
        to: to,
        msg: msg,
    })
    newChats.save().then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
    res.redirect("/chats");
})

app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chatEdit = await Chat.findById(id);
    res.render("edit.ejs", { chatEdit });

})
app.put("/chats/edit", async (req, res) => {
    let { from } = req.body;
    let { msg } = req.body;
    let updatedChat = await Chat.findOneAndUpdate({ from: from }, { msg: msg }, { runValidators: true, new: true }); //yo can use findByIdAndUpdate but for this you have to send id from your edit.ejs edited from button 
    res.redirect("/chats");
})

app.delete("/chats/:id" , async (req, res) =>{
    let { id } = req.params;
   await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

