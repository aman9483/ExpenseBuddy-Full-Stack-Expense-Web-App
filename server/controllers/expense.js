const Expense = require('../models/expense');


exports.createExpense = async(req, res)=>{

    const { ExpenseName, expenseCategory,  expenseAmount} = req.body;

      try {

       const expense = await Expense.create({

           ExpenseName,
           expenseCategory,
           expenseAmount,
           
       })

       res.status(200).json({

           message: 'expense created sucessfully',
           expense
       })


        
      } catch (error) {

        res.status(500).json({

            message: error.message
        })
 
        
      }
}

exports.getExpense = async(req, res)=>{

      try {

        const expense = await Expense.find();

        if(!expense){

            res.status(400).json({

                message: 'not found'
            })
        }

        res.status(200).json({

            message: 'found',
            expense
        })

        
      } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
      }
}

exports.updateExpense = async(req,res)=>{

      try {

        let expense = await Expense.find();

        if(!expense){

            res.status(400).json({

                message: 'not found'
            })
        }

        expense = await Expense.findByIdAndUpdate(req.params.id, req.body,{

            new: true,
            runValidators: true,
            useFindAndModify: false,
        });

        res.status(200).json({

            message: 'updated successfully',
            expense
         });
        
      } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
      }
}

exports.getExpenseDetails = async(req, res)=>{

     try {

        let expense = await Expense.findById(req.params.id);

        if(!expense){

            res.status(400).json({

                message: 'not found'
            })
        }

        res.status(200).json({

            message: 'found',
            recipe
         });
        
     } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
     }
}

exports.deleteExpense = async(req, res)=>{

      try {

        let expense = await Expense.findById(req.params.id);

        if(!expense){

            res.status(400).json({

                message: 'not found'
            })
        }

       await  expense.deleteOne();

       res.status(200).json({

        message: 'deleted successfully',
        
     });
        
      } catch (error) {

        res.status(500).json({

            message: error.message
        })
        
      }
}