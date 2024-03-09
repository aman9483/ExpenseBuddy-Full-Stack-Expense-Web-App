const express = require('express');
const { createExpense, getExpense, updateExpense, deleteExpense } = require('../controllers/expense');

const router = express.Router();

router.route('/').post(createExpense);
router.route('/').get(getExpense);
router.route('/:id').get(getExpense);
router.route('/:id').put(updateExpense);
router.route('/:id').delete(deleteExpense);

module.exports = router;