const express = require('express');
const Bank = require('../models/bank.js');
const router = express.Router();




router.get('/seed', (req, res) => {
  Bank.create(
    [
      {
        date: 'August 13, 2020',
        description: 'Salary Earnings',
        invoice: 8113,
        withdrawl: 0,
        deposit: 6385744.98,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'

      },
      {
        date: 'August 15, 2020',
        description: 'Paris Vacation',
        invoice: 8114,
        withdrawl: 6000,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 15, 2020',
        description: 'Taco Bell',
        invoice: 8115,
        withdrawl: 18.99,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 16 2020',
        description: 'Shopping/ Sneakers',
        invoice: 8116,
        withdrawl: 120.00,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 18, 2020',
        description: 'Taco Bell',
        invoice: 8117,
        withdrawl: 13.93,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 19, 2020',
        description: 'Earnings',
        invoice: 8118,
        withdrawl: 0,
        deposit: 25000,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 19, 2020',
        description: 'Earnings',
        invoice: 8119,
        withdrawl: 0,
        deposit: 38000,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 23, 2020',
        description: 'Paris Spending Money',
        invoice: 8120,
        withdrawl: 18000,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 24, 2020',
        description: 'Earnings',
        invoice: 8121,
        withdrawl: 0,
        deposit: 500000,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 25, 2020',
        description: 'Rolls Royce',
        invoice: 8122,
        withdrawl: 330845,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 25, 2020',
        description: 'Shopping/ T-Shirts',
        invoice: 8123,
        withdrawl: 43.42,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 25, 2020',
        description: 'Dinner With Boo Thang',
        invoice: 8124,
        withdrawl: 213.54,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 26, 2020',
        description: 'Recieved Owed Money From Friend',
        invoice: 8125,
        withdrawl: 0,
        deposit: 2819.23,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'August 29, 2020',
        description: 'Lost Bet With Same Friend',
        invoice: 8126,
        withdrawl: 1000,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'September 2, 2020',
        description: 'Rent',
        invoice: 8127,
        withdrawl: 5643.18,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'September 3, 2020',
        description: 'Earnings',
        invoice: 8128,
        withdrawl: 0,
        deposit: 18345172.49,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'September 3, 2020',
        description: 'Taco Bell',
        invoice: 8129,
        withdrawl: 21.99,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'September 6, 2020',
        description: 'Shopping/ Jeans',
        invoice: 8130,
        withdrawl: 63.54,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'September 7, 2020',
        description: 'Earnings',
        invoice: 8131,
        withdrawl: 0,
        deposit: 113000,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      },
      {
        date: 'September 8, 2020',
        description: 'Ferrari',
        invoice: 8132,
        withdrawl: 361000,
        deposit: 0,
        first: 'RJ',
        last: 'Singh',
        email: 'xsinghxarjun@gmail.com',
        dob: 'August 13, 1993',
        number: '916-555-5555'
      }
    ],
    (err, data) => {
      res.redirect('/');
    }
  )
});
