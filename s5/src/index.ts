const { View } = require('./index.view');
const { Controller } = require('./index.control');
const { Model } = require('./index.model');

const view = new View();
const model = new Model();
new Controller( model , view );