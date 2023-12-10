const asyncHandler = require("express-async-handler");
const employe_Schema = require("../models/employe_Schema");

// create product-------------------

const createEmploye = asyncHandler(async (req, res) => {
  const {fullname, email, age, phone, location} = req.body;
  try {

    if (!fullname && email) {
      throw new Error("Please fill all Fields");
    }
    const employeData = await employe_Schema.create({fullname,phone, email, age, location});
    res.status(200).json(employeData);
  } catch (error) {
    throw new Error(error);
  }
});

// get products-------------------

const getAllEmployes = asyncHandler(async (req, res) => {
  try {
    const getAllData = await employe_Schema.find()
    res.json(getAllData); 
  } catch (error) {
    throw new Error(error);
  }
});

// update prodcut------------------------

const updateEmploye = asyncHandler(async(req, res)=>{
  const {id} = req.params
  const {fullname, email, phone, age, location} = req.body
  
  try {
    const newData = await employe_Schema.findByIdAndUpdate(
      {_id:id},
      {
        fullname,
        email,
        phone,
        age,
        location,
      },
      {
        new:true,
      }
      )
    res.status(200).json(newData)
  } catch (error) {
    throw new Error(error);
  }
})

// delete Employe-------------------

const deleteEmploye = asyncHandler(async (req, res) => {
  const {id} = req.params;
  try {
    const delData = await employe_Schema.findByIdAndDelete({_id:id})
    res.json(delData); 
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createEmploye,
  getAllEmployes,
  updateEmploye,
  deleteEmploye
};
