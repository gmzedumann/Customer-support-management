// mongoose kullanarak customer için mongodb de şema oluşturma
//const degişken tanımlama demektir
// customer kaydetme schema oluşturuluyor
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeTicketSchema = new Schema({
  customer_name:{
    type:String,
    required:true
  },
  customer_lastname:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required: true
  },
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  file:{
    type:String
  },
  date: {
    type: Date,
    required: true
  },
},
{
  timestamps: true, //oluşturulma ve güncelleme tarihini veritabanına otomaik kayıt eder
}
);

const EmployeeTicket = mongoose.model('Employee Ticket', employeeTicketSchema);

module.exports = EmployeeTicket;