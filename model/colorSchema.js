const mongoose = require('mongoose');

const colorSchema=new mongoose.Schema({
    color: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 0
    },
    value: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Color', colorSchema);



module.exports = mongoose.model('Color', colorSchema);
