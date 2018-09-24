const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardners', {
  name: {
    type: Sequelize.STRING,
    allownull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Plot = db.define('plots', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  shaded: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});

const Vegetable = db.define('vegetables', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  planted_on: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Plot.belongsTo(Gardener); // Plot.belongsTo(Garneder) -- Creates a Garnener ID in the Plots Table
Gardener.hasOne(Plot); // Creates methods for Gardener to use
Gardener.belongsTo(Vegetable, { as: 'Fav_Veg' }); //This is the fav vegetable of the gardner

Vegetable.belongsToMany(Plot, { through: 'vegetable_plot' });
Plot.belongsToMany(Vegetable, { through: 'vegetable_plot' });

const potato = Vegetable.create( return {
  name: 'potato',
  color: 'red',
  planted_on: 20180101,
})


module.exports = db;
