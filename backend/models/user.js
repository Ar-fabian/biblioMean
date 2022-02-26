const mongoose = require('mongoose');
const jwt  = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    date:{ 
        type:date,
        default:Date.now
    }
});

userSchema.method.generateJWT = function () {
    return jwt.sign({
        _id: _id,
        name: this.name,
        email: this.email
    },"secretKey");
}

const User = mongoose.model('user', userSchema);



module.exports = User