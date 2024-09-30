const jwt = require('jsonwebtoken');
const user = require('../models/userModels');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const hashPassword = require('../utils/password');

// Generate JWT token
const generateToken = (id,res) => {
  console.log("id",id);
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.cookie("jwt",token)
  console.log("token " + token)
  // return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });

};

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await user.findOne({ email });
    if (userExists) return res.status(400).send(
      {
        success: false,
        message: 'User already exists' 

      });
    
    const hashedPassword = await hashPassword(password) 
    const userData = await user.create({ name, email, hashedPassword });
    if(!userData){
      return res.status(401).send(
        {
          success: false,
          message:"Error in User Creation"
        })
    } 
    res.status(201).send({
      success: true,
      massage: "User Register successfully"
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Internel server error"
    });
  }
};

exports.login = async (req, res) =>{
  const { email, password } = req.body;
  try {
    const userData = await user.findOne({ email });
    if(!userData){
      return res.status(400).send(
        {
          success: false,
          message:"Invalid credentials"
        })
    } 
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return res.status(400).send(
        {
          success: false,
          message:"Invalid credentials"
        })
    }
    generateToken(userData.id, res)
    userData.password = "*****"
    return res.status(200).send({
      success: true,
      massage: "Login successfully",
      data: userData
    });

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Internel server error"
    });
  }
}