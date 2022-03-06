const {mongoose,model} = require("mongoose");
const validator = require("validator")

const studentSchema = new mongoose.Schema({
    name: {
        type:String,
       required:true,
        trim:true,
        min:4,
        max:16
    },
    userName: {
        type:String,
       required:true,
        trim:true,
        unique:true,
        min:4,
        max:25,
        lowercase:true,
        // match: [/^., +, *, ?, ^, $, (, ), [, ], {, }, |, \., [0-9]/]
        // match: [/.+\@.+\..+/, 'Please fill a valid username']

    },
    email: {
        type:String,
       required:[true, "Please enter an email"],
        trim:true,
        unique:[true, "This email address is already registered"],
        min:4,
        max:25,
        lowercase:true,
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        // validate: [validateLocalStrategyProperty, 'Please fill in your email'],
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    mobile: {
        type: Number,
       required:[false, "Please enter an Mobile Number"],
        trim:true,
        min: 10,
        max:10,
    },
    picture: {
        type: String,
       required: false
    },
    isAdmin:{type:Boolean,default:false},

    token:{ type : String, required : true}
    },
{ timestamps: true }
 );

 const User = model('User',studentSchema)

module.exports = User;