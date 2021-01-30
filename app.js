const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const userAuthentication = require('./userAuthentication')

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('login')
})
app.post('/', (req, res) => {
  const userInput = req.body
  const result = userAuthentication(userInput)
  if (result === '信箱或密碼有誤，請重新輸入！') {
    res.render('login', { result, userInput })
  }
  else {
    res.render('welcome', { result })
  }
})

app.listen(port, (req, res) => {
  console.log(`Express app listening on http://localhost:${port}`)
})