// const fs = require('fs');
const videoshow = require('videoshow')

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
  
  var videoOptions = {
    fps: 24,
    loop: 0.25, // seconds
    transition: false,
    videoBitrate: 1024,
    videoCodec: 'libx264',
    size: '640x?',
    audioBitrate: '128k',
    audioChannels: 2,
    format: 'mp4',
    pixelFormat: 'yuv420p'
  }  
  
  videoshow(['5a87e1fdb7189d0e05b743e3.jpg', '5a87e98dc35ab80ebec050ac.jpg','5a87e1fdb7189d0e05b743e3.jpg', '5a87e98dc35ab80ebec050ac.jpg'], videoOptions)
    .save('video.mp4')
    .on('start', function (command) {
      console.log('ffmpeg process started:', command)
    })
    .on('error', function (err, stdout, stderr) {
      console.error('Error:', err)
      console.error('ffmpeg stderr:', stderr)
    })
    .on('end', function (output) {
      console.error('Video created in:', output)
    })
}

module.exports = {
  trigger: trigger,
  shoootImage: shoootImage
};
