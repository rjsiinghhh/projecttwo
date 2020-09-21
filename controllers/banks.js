const express = require('express');
const Bank = require('../models/bank.js');
const Bills = require('../models/bill.js')
const router = express.Router();

router.delete('/listofbills/:id', (req, res) => {
    Bills.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/bankofcali/listofbills');
    })
});

// user seed data


// create route


router.get('/seedofwealth', (req, res) => {
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


/*
router.get('/seeduser', (req, res) =>{
  User.create(
    [
      {
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
      res.redirect('/')
    }
  )
})
*/



// Upcoming bills route! this route takes you the bills.ejs page
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
      res.redirect('/bankofcali/listofbills3')
    }
  )
});
// bills index

router.get('/listofbills', (req, res) => {
  Bills.find({}, (error, allBills) => {
    res.render(
      'bills.ejs',
      {
        bills: allBills
      }
    );
    })
  });





// this route takes you to the home page, with all the transactions
router.get('/home', (req, res) => {
    Bank.find({}, (error, allBank) => {
        res.render(
            'index.ejs',
            {
                entry: allBank
            }
        );
    })
});

//this route leads you to a page to create a new transaction to the list
router.get('/listofbills/new' ,(req, res) => {
  res.render(
    'new.ejs'
  );
});

// this route shows individual transactions when invoice number is clicked...

router.get('/:id', (req, res) => {
    Bank.findById(req.params.id, (error, foundBank) => {
        res.render(
            'show.ejs',
            {
                entry:foundBank
            }
        );
    })
});

router.get('/listofbills/:id', (req, res) => {
  Bills.findById(req.params.id, (error, foundBills) => {
    res.render(
      'showbills.ejs',
      {
        bills: foundBills
      }
  );
})
});



// UPDATE, DELETE, AND EDIT ARE GOING TO WORK ONLY FOR USER INFORMATION , NOT TRANSACTIONS. FIRST I NEED TO GET THE OTHER DATA ONTO THE PAGE, THEN ADD THESE ROUTES


// edit user info page
// need to be changed!!!!!! to USER INFORMATION


router.get('/:id/edit', (req, res) => {
  Bank.findById(req.params.id, (error, foundBank)=> {
    res.render(
      'edit.ejs'
    )
  });
});
/*

router.put('/listofbills:id', (req, res) => {
    if(req.body.dueDate === 'on'){
        req.body.dueDate = true;
    } else {
        req.body.dueDate = false;
    }
    Bills.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
        (err, updatedModel) => {
            res.redirect('/listofbills');
        }
    )
})

*/

// post a transaction route

router.post('/listofbills', (req, res) => {

        res.redirect('/bankofcali/listofbills')

})







//
/*
router.delete('/:id/edit', (req, res) => {
  Bank.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/bankofcali')
  })
})
*/






router.get('/:id/edit', (req, res) => {
    Banks.findById(req.params.id, (error, foundBanks) => {
        res.render(
            'edit.ejs',
            {
                banks:foundBanks
            }
        );
    })
});







// $('div').on('click', () => {
//     console.log('bar');
// })
// console.log('foo');






module.exports = router;
