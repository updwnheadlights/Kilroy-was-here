const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    socialname: {
        type: String,
        required: false,
    },
    social: {
        type: String,
        required: false,
    },

});
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;
