const express = require('express')
const cors = require('cors');


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