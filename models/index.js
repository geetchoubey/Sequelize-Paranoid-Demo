/* eslint-disable import/order */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/**
 * Link all Sequelize Models and invoke the associate method to create schema.
 */
const fs = require('fs');
const path = require('path');

const sequelize = require('sequelize');

const connection = require('../config/database');

const db = {};
const jsExtensionLength = -3;

/**
 * Ignore self (index.js) and create an array of all Sequelize models saved as .js files under ./models directory.
 */
fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(jsExtensionLength) === '.js')
  .forEach(file => {
    const model = connection.import(path.join(__dirname, file));

    db[model.name] = model;
  });

/**
 * Check if the model has an associate method, and invoke the associate method.
 */
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.connection = connection;
db.sequelize = sequelize;

module.exports = db;
