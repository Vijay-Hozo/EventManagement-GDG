const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true
    }
})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next;
    }else{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    }
})

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;