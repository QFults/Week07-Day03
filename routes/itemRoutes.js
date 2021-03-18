const router = require('express').Router()
const { Item } = require('../models')
const passport = require('passport')

// GET all items
// router.get('/items', passport.authenticate('jwt'), (req, res) => {
//   Item.findAll({ where: { uid: req.user.id } })
//     .then(items => res.json(items))
//     .catch(err => console.log(err))
// })

// GET one Item
// router.get('/items/:id', passport.authenticate('jwt'), (req, res) => {
//   Item.findOne({ where: { id: req.params.id } })
//     .then(item => res.json(item))
//     .catch(err => console.log(err))
// })

// POST one Item
router.post('/items', passport.authenticate('jwt'), (req, res) => {
  Item.create({
    text: req.body.text,
    isDone: req.body.isDone,
    uid: req.user.id
  })
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

// PUT one Item
router.put('/items/:id', passport.authenticate('jwt'), (req, res) => {
  Item.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one Item
router.delete('/items/:id', passport.authenticate('jwt'), (req, res) => {
  Item.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
