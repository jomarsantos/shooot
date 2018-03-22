const fs = require('fs');

function trigger(io, socket, message, callback) {
  console.log('[INFO] Shooot triggered: '+message.code);
  // TODO: store the shooot details in DB

  var details = {
    success: true,
  };
  io.in(message.code).emit('trigger', details);
  
  var response = {
    success: true,
    msg: "Informed participants to shooot."
  };
  callback(response);
}

function shoootImage(io, socket, message, callback) {
  console.log('[INFO] Shooot image received: '+message.photo.base64);
  
  // fs.writeFile(message.user+'.jpg', message.photo.base64, {encoding: 'base64'}, function(err){});
  
  // TODO: store the shooot image in DB and process

  var response = {
    success: true,
    msg: "Saved image"
  };
  callback(response);
}

module.exports = {
  trigger: trigger,
  shoootImage: shoootImage
};
