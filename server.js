const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')


mongoose.connect(
    'mongodb+srv://chelandrew94:Stangs13!@awall.pftmror.mongodb.net/?retryWrites=true&w=majority'
)
.then((resp) => {console.log('connected to mongodb', resp.connections)})
.catch(() => {console.log('failed to connect to mongodb')})


const PORT = 3001
const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const testRouter = require('./src/routes/test')

app.use('/test', testRouter)

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})