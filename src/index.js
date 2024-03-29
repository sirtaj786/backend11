const express = require("express");
const dotenv=require("dotenv");
var bodyParser = require("body-parser");
const cors=require("cors");
const user=require('./features/users/users.router');
const emi=require('./features/emi/emi.router')
const dbConnect=require('./config/db')
dotenv.config();
let PORT =process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use("/users", user);
app.use("/calculateEmi",emi)

app.get('/' , (req , res) => {
  res.send("Hello")
})

app.listen(PORT||8080, async () => {
  await dbConnect();
  console.log(`Listening on http://localhost:${PORT}`);
});
