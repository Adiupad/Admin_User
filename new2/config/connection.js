const mongoose = require("mongoose");


// const db = mongoose.connect("mongodb://localhost:27017/assignment",{
//     useNewUrlParser:true
// }).then( () =>{
//     console.log("COnnected")
// }).catch( (err) =>{
//     console.log(err)
// })

//  try {
    
const mongoConn = async () => {
try {
    const db =  mongoose.connect("mongodb://localhost:27017/assignment",{
    useNewUrlParser:true
})
console.log("connected")
} catch (error) {
    console.log(error)
}
}
module.exports = mongoConn;