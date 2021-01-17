// Bağlantı ve routerları tanıma 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  //mongoose mongodb ye baglanmaya yardımcı olacak

require('dotenv').config();

const app = express();   //express sunucu
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());  //sunucu json gönderip alacak 


//veritabanı baglantısı
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true, useFindAndModify:true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// routerlar 
const customerTicketRouter=require('./routes/customer-ticket');
const employeeTicketRouter=require('./routes/employee-ticket');
// routerları kullanma
app.use('/customer-ticket',customerTicketRouter);
app.use('/employee-ticket',employeeTicketRouter);
//başlatıldıgı zaman sunucuyu dinleme
 app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
});
