const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const {getHouses, deleteHouse, createHouse, updateHouse} = require("./controller.js")

app.get("/api/houses", getHouses)
app.delete("/api/houses/:id", deleteHouse)
app.post("/api/houses", createHouse)
app.put("/api/houses/:id", updateHouse)


app.listen(4004, () => console.log("Live on port 4004"))