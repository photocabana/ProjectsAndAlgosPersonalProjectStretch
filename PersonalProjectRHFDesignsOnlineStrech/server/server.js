const express = require("express")
const cors = require('cors')
const app = express()

const cookieParser = require('cookie-parser')
require('dotenv').config()

require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({ extended: true }))
app.use(cors({credentials:true, origin:'http://localhost:5173'}))
app.use(cookieParser())

const userRoutes = require("./routes/user.routes")
userRoutes(app)

const AllMyJewelryRoutes = require("./routes/jewelry.routes")
AllMyJewelryRoutes(app)
console.log(Response)

app.listen(8000, () => console.log("The server is all fired up on port 8000"))
