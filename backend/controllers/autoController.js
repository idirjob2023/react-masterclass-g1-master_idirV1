const asyncHandler = require("express-async-handler");
const Auto = require("../models/autoModel");

// @[  GET,  /api/autos/, private,  return all autos ]
const getAutos = asyncHandler(async (req, res) => {
  const autos = await Auto.find();
  console.log(autos);
  res.status(200).json({
    autos,
    message: "getAutos method from autoController",
  });
});

// @[ POST,  /api/autos/create,  private,  create new vehicule  ]
const createAuto = asyncHandler(async (req, res) => {
  const {
    brand,
    model,
    year,
    color,
    energy,
    horsepower,
    transmission,
    nbrSiege,
    category,
    status,
    photos,
  } = req.body;
  const newAuto = await Auto.create({
    brand,
    model,
    year,
    color,
    energy,
    horsepower,
    transmission,
    nbrSiege,
    category,
    status,
    photos,
  });
  console.log(newAuto);
  res.status(200).json({
    auto: newAuto,
    message: "getAutos method from autoController",
  });
});

// @[  GET,  /api/autos/query, private,  return all autos ]
const getAutosQuery = asyncHandler(async (req, res) => {
  
  const { brand, model, color } = req.query;
  
  let chaineDeRecherceh ={};
  
  if(brand) {
    chaineDeRecherceh.brand=brand;
  }

  if(model) {
    chaineDeRecherceh.model=model;
  }
  
  if(color) {
    chaineDeRecherceh.color=color;
  }
   
  console.log( 'chaineDeRecherceh',chaineDeRecherceh);

  const autos = await Auto.find(chaineDeRecherceh);
  
  console.log( autos);

  res.status(200).json({
   autos,
    message: "getAutos method from autoController",
  });
});

module.exports = {
  getAutos,
  createAuto,
  getAutosQuery,
};
