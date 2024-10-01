const jwt = require('jsonwebtoken');
const user = require('../models/userModels');

const jwtToken = async (req, res, next) => {
  let token = req.cookies.token
  console.log(token)

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if(!decoded){
      res.status(401).send({
        message: 'Not authorized, token failed',
        success: false
    });
    }
    req.user = await user.findById(decoded.id).select('-password');
    next();
  } catch (err) {
    res.status(401).send({
        message: 'Not authorized, token failed',
        success: false
    });
  }
};


const checkAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Admin access required');
  }
  next();
};

const checkSubAdmin = (req, res, next) => {
  if (req.user.role !== 'sub-admin') {
    return res.status(403).send('Sub-admin access required');
  }
  next();
};

module.exports = { jwtToken, checkAdmin, checkSubAdmin };
