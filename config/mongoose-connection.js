const mongoose = require('mongoose')

mongoose
    .connect("mongodb://127.0.0.1:27017/ecommerce")
    .then(function () {
        console.log("success")
    })
    .catch(function (err) {
        console.log("error is ", error)
    })

module.exports=mongoose.connection