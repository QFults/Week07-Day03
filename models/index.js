const User = require('./User.js')
const Item = require('./Item.js')

User.hasMany(Item, { foreignKey: 'uid' })
Item.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, Item }
