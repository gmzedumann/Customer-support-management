// mongoose kullanarak customer için mongodb de şema oluşturma
//const degişken tanımlama demektir
// customer kaydetme schema oluşturuluyor
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerTicketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  file: {
    type: String
  },
  date: {
    type: Date,
    required: true
  },
  ticket_state: {
    type: String,
    required:false
  }
},
{
  timestamps: true, //oluşturulma ve güncelleme tarihini veritabanına otomaik kayıt eder
}     
);

const CustomerTicket = mongoose.model('Customer Ticket', customerTicketSchema);

module.exports = CustomerTicket;