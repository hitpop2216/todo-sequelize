const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const usePassport = require('./config/passport')
const routes = require('./routes')
const app = express()
const PORT = 3000

app.engine('hbs', exphbs({defaultLayout: 'main', extname:'.hbs'}))
app.set('view engine', 'hbs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
usePassport(app)

app.use(routes)
app.listen(PORT, () => {
  console.log(`This app is running on localhost:${PORT}`)
})