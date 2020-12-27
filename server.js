const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 },()=>{
    console.log('server started');
});

wss.on('connection', function connection(ws) {
   ws.on('message', (data) => {
      console.log('data received \n %o', data);
      ws.send(data);
   });
   
   ws.on('error', function close(code, reason) {
      console.log('error ' + code + ':'+reason);
   });

   ws.on('close', function close(code, reason) {
        console.log('close ' + code + ':'+reason);
   });
});

wss.on('listening',()=>{
   console.log('listening on 3000');
});



// const WebSocket = require('ws');
// const wss = new WebSocket.Server({ port: 8080 }, ()=>{
//     console.log('server started')
// });

// wss.on('connection', function connection(ws, request) {
//     console.log('connection');
//     ws.on('message', function incoming(message) {
//         console.log('received: %s', message);
//     });
//     ws.on('close', function close(code, reason) {
//         console.log('close ' + code + ':'+reason);
//     });
//     ws.send('something');
// });

// wss.on('listening', ()=>{
//     console.log('server is listening on port 8080');
// })


// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ host : "ws://localhost/socketserver", port : 3000});
// // 처음에 웹소켓이 연결될 때, callback 함수가 실행
// wss.on("connection", function(ws) {
// 	ws.on('message', function(message) {
//     	const sendData = {
//           event: 'response',
//           data: null
//         };
//         switch(message.event) {
//           case 'connection':
//             console.log(message);
//             break;
//           case 'send':
//             sendData.data = 'Hello';
//             ws.send(JSON.stringify(sendData));
//             break;
//         }
//     });
    
// });



// var WebSocketS = require("ws").Server;
// var wss = new WebSocket({ port: 3000 });

// // 연결이 수립되면 클라이언트에 메시지를 전송하고 클라이언트로부터의 메시지를 수신한다
// wss.on("connection", function(ws) {
//   ws.send("Hello! I am a server.");
//   ws.on("message", function(message) {
//     console.log("Received: %s", message);
//   });
// });
