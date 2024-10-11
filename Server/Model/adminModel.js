const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
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

adminSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        return next();
    }else{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }
})

const AdminModel = mongoose.model('Admin', adminSchema);
module.exports = AdminModel;