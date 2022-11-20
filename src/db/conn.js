const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/userRegistration", {})  //used for joining database with mongodb compass
.then(() => {
    console.log(`connection successful`);
})
.catch((e) => {
    console.log(`connection failed`);
});