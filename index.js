const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const {
    getAllHouses,
    deleteHouse,
    createHouse,
    updateHouse,
} = require('./controller')



app.get('/api/houses', getAllHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

app.listen(4004, () => console.log('Server is running on port 4004'))