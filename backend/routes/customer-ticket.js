const router = require('express').Router();
let CustomerTicket = require('../models/customer-ticket.model');

//tüm ticketlerı getirme 
router.route('/').get((req, res) => {
    CustomerTicket.find()
      .then(tickets=> res.json(tickets))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  // Customer kaydetme
router.route('/add').post((req, res) => {
  const name = req.body.name;// girilen name i Customer türünden newCustomer degişkenine at
  const lastname = req.body.lastname;
  const email=req.body.email;
  const title=req.body.title;
  const description=req.body.description;
  const file= req.body.file;
  const date = Date.parse(req.body.date);
  const newCustomerTicket = new CustomerTicket({
    name,
    lastname,
    email,
    title,
    description,
    file ,
    date,
    ticket_state:"Open"
  }); 
  newCustomerTicket.save()  // yeni customer kaydediliyor
    .then(() => res.json('Customer Ticket added!'))
    // kaydedildikten sonra customer added diye döndür
    .catch(err => res.status(400).json('Error: ' + err));
});

//// id göre bulup getirme
router.route('/:id').get((req, res) => {
CustomerTicket.findById(req.params.id)
    .then(ticket => res.json(ticket))
    .catch(err => res.status(400).json('Error: ' + err));
});
///// update //////
router.route('/update/:id').post((req, res) => {
  CustomerTicket.findById(req.params.id)
    .then(ticket => {
      ticket.name = req.body.name;
      ticket.lastname = req.body.lastname;
      ticket.email = req.body.email;
      ticket.title = req.body.title;
      ticket.description = req.body.description;
      ticket.file = req.body.file;
      ticket.date = Date.parse(req.body.date);
      ticket.save()
        .then(() => res.json('Customer Ticket Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
////// ticket_state
router.route('/state/update/:id').post((req,res)=>{
  CustomerTicket.findById(req.params.id)
  .then(ticket=>{
    if(ticket.ticket_state!=="Open"){
      ticket.ticket_state="Open";
    } 
   else  if(ticket.ticket_state!=="Close"){
      ticket.ticket_state="Close";
    }
    ticket.save()
    .then(()=>res.json(ticket_state))
    .catch(err=>res.status(400).json('Error:'+err));
  })
  .catch(err=>res.status(400).json('Error:'+err));
})

module.exports = router;


