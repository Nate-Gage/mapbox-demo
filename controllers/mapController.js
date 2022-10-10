const RESOURCE_CREATED = 201;

//Data would normally be managed by a back-end database
//In this case I simply hold the data in memory
let temperatureData;

// I made these functions asynchronous since these would normally
// be doing, for example, network calls to a database

const getTemps = (req, res) => {
  res.send(temperatureData);
};

const saveTemps = (req, res) => {
  console.log("MADE IT IN HERE: " + JSON.stringify(req.body));
  temperatureData = req.body;
  res.status(RESOURCE_CREATED).send();
};

module.exports = {
  getTemps,
  saveTemps,
};