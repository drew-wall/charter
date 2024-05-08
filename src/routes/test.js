const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

router.get('/', (req, res ) => {
  res.status(200).send('test route')
})

router.post('/', (req, res ) => {
  console.log(req.body)
  res.status(200).json({message: 'test worked'})
})

router.post('/file', async (req, res)=> {
  console.log(path.dirname(req.body.filename))
  console.log(path.basename(req.body.filename))
  console.log(path.resolve(req.body.filename))
  console.log(__dirname)
  let filename = __dirname + '/../../' + req.body.filename
  console.log(filename)
  try {
    let fileContent = await fs.promises.readFile(filename, { encoding: "utf-8" })
    res.status(200).send(fileContent)
  }
  catch (e) {
    res.status(404).send('Error opening file' + filename)
  }
})

module.exports = router