const express = require('express')
const session = require('express-session')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 4000
const { signInControl } = require('./controllers/signInController')
const { signUpControl } = require('./controllers/signUpController')
const { userControl }= require('./controllers/userController')

app.use(
  session({
    secret: '@!myyoutube',
    resave: false,
    saveUninitialized: true
  })
)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(
  cors({
    origin: [
      'http://shortly-sprint.s3-website.ap-northeast-2.amazonaws.com',
      'http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
  })
)

app.get('/',(req, res) => {
  res.send('Root Page')
})

app.get('/mypage', userControl)
app.post('/signin', signInControl)
app.post('/signup', signUpControl)

app.listen(port, () => {
  console.log(`Server Listen on ${port}`)
})

module.exports = app