// import React, { useState, useEffect, useRef } from "react";
// import socketIOClient from "socket.io-client";
// const ENDPOINT = "https://simpvserv.herokuapp.com/";
// const socket = socketIOClient(ENDPOINT);


// const constraints  = {
//   audio: true,
//   video: false
// };


// function Voice() {
//   // const [muted, setMuted] = useState(false);

//   // const audio = useRef();
//   // const video = useRef();
//   // const otherVideo = useRef();

//   useEffect(() => {
   

//   })


//   navigator.mediaDevices.getUserMedia(constraints)
// .then((stream)=> {
  
//   var mediaRecorder:any = new MediaRecorder(stream, {
//     mimeType: 'audio/webm'});
//   mediaRecorder.onstart = function(e:any) {
//     this.chunks = [];
//   };
//   mediaRecorder.ondataavailable = function(e:any) {
//     this.chunks.push(e.data);
//     var blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' });
//     socket.emit('audio', blob);

//     // mediaRecorder.start();
//   };
//   //   mediaRecorder.onstop = function(e) {
//     // };
    
//     mediaRecorder.start();
    
//     // Start recording
    
//     // Stop recording after 5 seconds and broadcast it server
//    var dinus =  setInterval(() => {
//   //     // setTimeout(function() {
//         mediaRecorder.stop()
//         mediaRecorder.start();
//       }, 800);
//     // }, 100);
//     // console.log(stream)
//     // if (video.current) {
//     //   var userVideoStream = stream
//     //   video.current.srcObject = stream
//     // }
//       socket.on('got', function(arrayBuffer:any) {
        
//         var blob = new Blob([arrayBuffer], { 'type' : 'audio/ogg; codecs=opus' });
//         var audio = document.createElement('audio');
//         audio.src = window.URL.createObjectURL(blob);
//         audio.play();
//         // console.log(audio)
//       });
//       // }
     

//     })


//     // function enableMute() { 
//     //     setMuted(true)
//     // } 
    

//     // navigator.mediaDevices.getUserMedia(constraints).then(stream=>{
      
//       // });
      
//       return (
//         <div className="App">
//       <header className="App-header">
//       <div id="container">
// </div>
//       </header>
//     </div>
//   );
// }

// export default Voice;
