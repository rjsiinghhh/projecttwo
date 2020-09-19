const express = require('express');
const Bank = require('../models/bank.js');
const router = express.Router();



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
        deposit: 18345172.49
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
      res.redirect('/');
    }
  )
});



// User Info Seeeed

/*
router.get('/seedofwealth', (req, res) => {
  Bank.create(
    [

*/




// index route
router.get('/index', (req, res) => {
    Bank.find({}, (error, allBank) => {
        res.render(
            'index.ejs',
            {
                entry: allBank
            }
        );
    })
});

//new
router.get('/new' ,(req, res) => {
  res.render('new.ejs');
});

// show

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


//
/*
router.delete('/:id/edit', (req, res) => {
  Bank.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/bankofcali')
  })
})
*/













// $('div').on('click', () => {
//     console.log('bar');
// })
// console.log('foo');






module.exports = router;
