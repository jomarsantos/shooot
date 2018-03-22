function trigger(io, socket, message, callback) {
  console.log('[INFO] Shooot triggered');
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

module.exports = {
  trigger: trigger
};
