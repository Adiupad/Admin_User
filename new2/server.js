// Arr1 = [51, 24, 40, 18, 12, 24]
// Arr2 = [20, 32, 18, 25, 51, 76, 18]

// const newArray = Arr1 + Arr2;
// const filterArray = newArray.filter
// console.log(filterArray)

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = 3000;
//connection
const mongoConn = require("./config/connection")
mongoConn();

app.use(express.json({extended:false}))

const userRoute = require("./router/user")


app.use(userRoute)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})