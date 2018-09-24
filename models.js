const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')

module.exports = db

const Gardener = db.define('gardner', {
    name : {
      type: Sequelize.STRING,
      allownull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
}


