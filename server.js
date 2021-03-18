require('dotenv').config()

const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { User } = require('./models')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(require('./routes'))

require('./db').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))
