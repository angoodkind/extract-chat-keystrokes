const mongoose = require('mongoose');
const ksSchema = new mongoose.Schema(
    {
        keystroke: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const KS = mongoose.model("keystrokes", ksSchema);
module.exports = KS;