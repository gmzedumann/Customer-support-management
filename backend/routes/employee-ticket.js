const router = require('express').Router();
let EmployeeTicket = require('../models/employee-ticket.model');

router.route('/').get((req, res) => {
    EmployeeTicket.find()
      .then(tickets=> res.json(tickets))
      .catch(err => res.status(400).json('Error: ' + err));
  });
// employee kaydetme 
router.route('/add').post((req, res) => {
  const customer_name= req.body.customer_name;
  const customer_lastname=req.body.customer_lastname;
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email=req.body.email;
  const title=req.body.title;
  const description=req.body.description;
  const file=req.body.file;
  const date = Date.parse(req.body.date);
  const newEmployeeTicket = new EmployeeTicket({
    customer_name,
    customer_lastname,
    name,
    lastname,
    email,
    title,
    description,
    file ,
    date
  }); // girilen username i employe türünden newCustomer degişkenine at
// yeni customer kaydediliyor
  newEmployeeTicket.save()
    .then(() => res.json('Employee Ticket added!')) // kaydedildikten sonra customer employe diye döndür
    .catch(err => res.status(400).json('Error: ' + err));

});
//// id göre bulup getirme
router.route('/:id').get((req, res) => {
  EmployeeTicket.findById(req.params.id)
      .then(ticket => res.json(ticket))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;