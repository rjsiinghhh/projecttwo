const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
    {
        bill: { type: String, required: true },
        amount: { type: Number, required: true }
});

const Bills = mongoose.model('Bills', billSchema);

module.exports = Bills;
