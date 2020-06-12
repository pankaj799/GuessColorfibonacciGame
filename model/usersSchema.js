const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema=new mongoose.Schema({
    FullName: {
        type: String
    },
    Score: {
        type: Number,
        default: 0,
        required: true
    }
},
    { timestamps: true}
);


module.exports = mongoose.model('User', UserSchema);
