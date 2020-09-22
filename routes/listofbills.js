



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

router.get('/listofbills/new' ,(req, res) => {
  res.render(
    'new1.ejs'
  );
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

router.post('/listofbills/post', (req, res) => {
  console.log(req.body);
  Bills.create(req.body, (error, createdBills)=>{
    res.redirect('/bankofcali/listofbills')
  })
})

router.delete('/listofbills/:id', (req, res) => {
    Bills.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/bankofcali/listofbills');
    })
});
