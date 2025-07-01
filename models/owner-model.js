const mongoose = require('mongoose')


const ownerSchema = mongoose.Schema({

    fullname: String,
    email: String,
    password, String,
    products: Array,
    picture: string,
    gstin:string


})

module.exports = mongoose.model("owner", ownerSchema)