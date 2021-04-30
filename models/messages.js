const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema(
    {
        msg: {
            type:String,
            required:true
        }
    },
    {
        timestamps: true
    }
);

// kind of dumb to have both named "msg"
// in this case, the first arg is the  collection to write to
const Msg = mongoose.model('msg', msgSchema);
module.exports = Msg;