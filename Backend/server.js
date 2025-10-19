const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();
const app = express();
connectToDb();

app.use({cors});
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is running! ⚡");
});

app.listen(PORT,()=>{
    console.log("Server running on port : ${PORT}");
    
})