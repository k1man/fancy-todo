const express = require("express")
const router = require("./routes/index")

const app = express()
const PORT = 3000

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

app.listen(PORT, ()=>{
    console.log(`Fancy TODO running on PORT ${PORT}`);
})