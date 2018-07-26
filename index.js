const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const app = express()

const users = {}

app.use(bodyParser.json())
//encode password
app.post('/signup', async (req, res) => {
  if (req.body.password && req.body.uname) {
    try {
      const hashedpw = await bcrypt.hash(req.body.password, 10)
      users[req.body.uname] = {
        password: hashedpw
      }
      console.log(users)
      res.status(200).send({ message: "You've signed up!" })
    } catch (e) {
      console.log(e)
      res.sendStatus(500)
    }
  } else {
    res.sendStatus(500)
  }
})

//compare passwords compare if hash2 = salt1 + password => 2 hashes are equal
app.post('/login', async (req, res) => {
  if (req.body.uname && req.body.password) {
    try {
      const valid = await bcrypt.compare(
        req.body.password,
		users[req.body.uname].password,
      )
      if (valid) {
        res.status(200).send({ message: `Hello ${req.body.uname}` })
      } else {
        res.status(530).send({ message: 'Not authorized' })
      }
    } catch (e) {
      res.sendStatus(500)
    }
  }
})

app.listen(3000, () => {
  console.log('Hello', 'http://localhost:3000')
})