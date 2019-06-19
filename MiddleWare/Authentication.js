const mongoose = require('mongoose')
const Authmodel = mongoose.model('Auth')
const LoggerResponse = require('./../Library/LoggerResponse')
const UserResponse = require('./../Library/UserResponse')
const token = require('./../Library/Jwttoken')
const check = require('./../Library/check')

let isAuthorized = (req, res, next) => {
  if (req.body.authToken || req.params.authToken || req.query.authToken) {
    Authmodel.findOne({ authToken: req.body.authToken || req.params.authToken || req.query.authToken }).exec((err, result) => {
      if (err) {
        LoggerResponse.error('Error in Authtoken', 'isAuthorized()', 300);
        let apiresponse = UserResponse.Message(true, 300, 'Error in Authtoken', null)
        res.send(apiresponse)
      }
      else if (check.isEmpty(result)) {
        LoggerResponse.error('Authtoken is either invalid or expired', 'isAuthorized()', 300);
        let apiresponse = UserResponse.Message(true, 300, 'Authtoken is either invalid or expired', null)
        res.send(apiresponse)
      }
      else{
        token.verifyJWT(result.authToken,result.secretkey,(err,final)=>{
          if(err)
          {
        LoggerResponse.error('Unable to verify Authtoken', 'isAuthorized()', 300);
        let apiresponse = UserResponse.Message(true, 300, 'Unable to verify Authtoken', null)
        res.send(apiresponse)
          }
          else{
            next();
            
          }
        })
      }
    })
  }
  else {
    LoggerResponse.error('Authtoken is missing', 'isAuthorized()', 300);
    let apiresponse = UserResponse.Message(true, 300, 'Authtoken is missing', null)
    res.send(apiresponse)
  }
}


module.exports = {
  isAuthorized: isAuthorized
}
