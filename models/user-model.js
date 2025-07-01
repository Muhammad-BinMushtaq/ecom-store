const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password, String,
    cart: Array,
    isAdmin: Boolean,
    order: String,
    contact: Number,
    picture: string

})

module.exports = mongoose.model("user", userSchema)