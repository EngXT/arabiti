module.exports = app => {
  const governorates = require("../controllers/governorate.controller.js");

  var router = require("express").Router();

  // Create a new Governorate
  router.get("/getAllGovarnorates", governorates.getAllGovarnorates);
  router.get("/getAllCitiesForGov", governorates.getAllCitiesForGov);     //governorateId
  router.get("/searchForGovByCity", governorates.searchForGovByCity);     //cityId
  router.get("/searchForCity", governorates.searchForCity);               //cityId
  
  app.use('/api/governorates', router);
};