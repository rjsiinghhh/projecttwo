
/*
date: {type: Number, required: true},
description: {type: String, required: true},
invoice: {type: Number, required: true},
withdrawl: {type: Number, required: false},
deposit: {type: Number, required: false},
totalBalance: {type: Number, required: true}
});

*/

/// STARTING BALANCE !!!!

// $$ 567,278,892.24

// 567 MILLION, 278 THOUSAND, 892 HUNDRED, 24 CENTS




router.get('/seedofwealth', (req, res) => {
  Bank.create(
    [
      {
        date: 'August 13, 2020',
        description: 'Salary Earnings',
        invoice: 8113,
        withdrawl: 0,
        deposit: 6385744.98

      },
      {
        date: 'August 15, 2020',
        description: 'Paris Vacation',
        invoice: 8114,
        withdrawl: 6000,
        deposit: 0
      },
      {
        date: 'August 15, 2020',
        description: 'Taco Bell',
        invoice: 8115,
        withdrawl: 18.99,
        deposit: 0
      },
      {
        date: 'August 16 2020',
        description: 'Shopping/ Sneakers',
        invoice: 8116,
        withdrawl: 120.00,
        deposit: 0
      },
      {
        date: 'August 18, 2020',
        description: 'Taco Bell',
        invoice: 8117,
        withdrawl: 13.93,
        deposit: 0
      },
      {
        date: 'August 19, 2020',
        description: 'Earnings',
        invoice: 8118,
        withdrawl: 0,
        deposit: 25000
      },
      {
        date: 'August 19, 2020',
        description: 'Earnings',
        invoice: 8119,
        withdrawl: 0,
        deposit: 38000
      },
      {
        date: 'August 23, 2020',
        description: 'Paris Spending Money',
        invoice: 8120,
        withdrawl: 18000,
        deposit: 0
      },
      {
        date: 'August 24, 2020',
        description: 'Earnings',
        invoice: 8121,
        withdrawl: 0,
        deposit: 500000
      },
      {
        date: 'August 25, 2020',
        description: 'Rolls Royce',
        invoice: 8122,
        withdrawl: 330845,
        deposit: 0
      },
      {
        date: 'August 25, 2020',
        description: 'Shopping/ T-Shirts',
        invoice: 8123,
        withdrawl: 43.42,
        deposit: 0
      },
      {
        date: 'August 25, 2020',
        description: 'Dinner With Boo Thang',
        invoice: 8124,
        withdrawl: 213.54,
        deposit: 0
      },
      {
        date: 'August 26, 2020',
        description: 'Recieved Owed Money From Friend',
        invoice: 8125,
        withdrawl: 0,
        deposit: 2819.23
      },
      {
        date: 'August 29, 2020',
        description: 'Lost Bet With Same Friend',
        invoice: 8126,
        withdrawl: 1000,
        deposit: 0
      },
      {
        date: 'September 2, 2020',
        description: 'Rent',
        invoice: 8127,
        withdrawl: 5643.18,
        deposit: 0
      },
      {
        date: 'September 3, 2020',
        description: 'Earnings',
        invoice: 8128,
        withdrawl: 0,
        deposit: 18345172.00
      },
      {
        date: 'September 3, 2020',
        description: 'Taco Bell',
        invoice: 8129,
        withdrawl: 21.99,
        deposit: 0
      },
      {
        date: 'September 6, 2020',
        description: 'Shopping/ Jeans',
        invoice: 8130,
        withdrawl: 63.54,
        deposit: 0
      },
      {
        date: 'September 7, 2020',
        description: 'Earnings',
        invoice: 8131,
        withdrawl: 0,
        deposit: 113000
      },
      {
        date: 'September 8, 2020',
        description: 'Ferrari',
        invoice: 8132,
        withdrawl: 361000,
        deposit: 0
      }
    ],
    (err, data) => {
      res.redirect('/wealth');
    }
  )
});





// USER INFORMATION




router.get('/userseed', (req, res)=> {
  User.create(
    [
      {
        name: '',
        age: 27,
        address: ''
      }
    ]
  )
})








const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  date: {type: Number, required: true},
  description: {type: String, required: true},
  invoice: {type: Number, required: true},
  withdrawl: {type: Number, required: false},
  deposit: {type: Number, required: false},
  totalBalance: {type: Number, required: true}
})

const Bank = mongoose.model('Bank', bankSchema);




module.exports = Banks
































const mongoose = require('mongoose');



const userSchema = new.mongoose.Schema ({
  first: {type: String, required: true},
  last: {type: String, required: true},
  email: {type: String, required: true},
  dob: {type: String, required: true},
  address: {type: String, required: true},
  number: {type: String, required: true}

})

const User = mongoose.model('User', userSchema);

module.exports = User;



{
  first: 'RJ',
  last: 'Singh',
  email: 'xsinghxarjun@gmail.com',
  address: '23 Def Not Putting My Address Here Blvd, Dreamville, CA 92134',
  dob: 'August 13, 1993',
  number: '9167995611'
}
],
(err, data) => {
res.redirect('/');
}
)
});



















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
