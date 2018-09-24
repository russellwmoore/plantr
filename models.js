const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')

module.exports = db

const Gardener = db.define('gardners', {
    name : {
        type: Sequelize.STRING,
      allownull: false
    },
    age: {
        type: Sequelize.INTEGER,
      allowNull: false
    }
})

const Plot = db.define('plots', {
    size: {
        type: Sequelize.integer,
        allowNull: false
    },
    shaded: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

const Vegetable = db.define('vegetables', {
    name: {
        type: Sequelize.string,
        allowNull: false
    }, 
    color: {
        type: Sequelize.string,
        allowNull: false
    },
    planted_on: {
        type: Sequelize.date,
        allowNull: false    
    }
})

