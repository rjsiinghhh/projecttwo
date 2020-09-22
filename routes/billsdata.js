const express = require('express');
const Bills = require('../models/bill.js')
const router = express.Router();

router.get('/bills', (req, res)=> {
  Bills.create(
     [
      {
        bill: 'PG&E',
        amount: 319,
        dueDate: 'September 15, 2020'
      },
      {
        bill: 'Water Bill',
        amount: 48,
        dueDate: 'September 13, 2020'

      },
      {
        bill: 'Rolls Royce Car Note',
        amount: 7000,
        dueDate: 'September 15, 2020'
      },
      {
        bill: 'Fancy Gym Membership',
        amount: 500,
        dueDate: 'September 8, 2020'
      },
      {
        bill: 'General Assembly Tution',
        amount: 1450,
        dueDate: 'September 3, 2020'
      },
      {
        bill: 'Parking Ticket',
        amount: 39.40,
        dueDate: 'September 10, 2020'

      },
      {
        bill: 'Ferrari Car Note',
        amount: 9000,
        dueDate: 'September 15, 2020'

      },
      {
        bill: 'American Express',
        amount: 21000,
        dueDate: 'September 13, 2020'

      }
    ],
    (err, data) => {
      res.redirect('/bankofcali/listofbills')
    }
  )
});

module.exports = billsdata;
