const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    ExpenseName: {
        type: String,
        required: [true, 'Please enter the expense name'],
        trim: true,
        maxLength: 500
    },
    expenseCategory: {
        type: String,
        required: [true, 'Please enter the expense category'],
        trim: true,
        enum: ['Investment', 'Expense', 'Saving'],
        default: 'investment'
    },
    expenseAmount: {
        type: Number,
        required: [true, 'Please enter the expense Amount'],
    }
});

module.exports = mongoose.model('expense', expenseSchema);
