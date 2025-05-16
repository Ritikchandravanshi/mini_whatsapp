
const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },

    to: {
        type: String,
        required: true
    },
    
    msg: {
       type : String , 
        maxLength : 50,
    
    }
},
{
  timestamps: true  // ✅ enables createdAt and updatedAt automatically
 
})

const Chat = mongoose.model("Chat" , chatSchema);

module.exports = Chat;