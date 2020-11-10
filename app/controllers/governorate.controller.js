const db = require("../models");
const Governorate = db.governorate;

// Retrieve all Governorates from the database.
exports.getAllGovarnorates = (req, res) => {  
  Governorate.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving governorates."
      });
    });
};

// Retrieve all cities fro specific gavernorate
exports.getAllCitiesForGov = (req, res) => {  
  Governorate.find({governorateId:req.body.governorateId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving governorates."
      });
    });
};

// search for governorate with city id.
exports.searchForGovByCity = (req, res) => {  
  Governorate.find({ "cities.cityId":req.body.cityId})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving city."
      });
    });
};

// search for city by city id.
exports.searchForCity = (req, res) => {  
  Governorate.find({ "cities.cityId":req.body.cityId})
    .then(data => {      
      res.send(searchinArr(req.body.cityId,data[0].cities));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving city."
      });
    });
};

function searchinArr(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].cityId === nameKey) {
            return myArray[i];
        }
    }
}