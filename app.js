const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const app = express()
const PORT = 3000

app.engine('hbs', exphbs({defaultLayout: 'main', extname:'.hbs'}))
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(PORT, () => {
  console.log(`This app is running on localhost:${PORT}`)
})