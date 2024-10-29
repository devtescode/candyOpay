const express = require ('express')
const app = express()
const env = require ('dotenv').config()
const PORT = process.env.PORT
const userRoutes = require("./Routes/user.routes.js")
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/userinvest", userRoutes)

app.listen(PORT, ()=>{
    console.log('server is running on port 5000');
})