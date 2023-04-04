# Hoom

Zoom Clone using NodeJS, WebRTC and WebSockets.

### What is a WebRTC?

Real-time communication for the web </br>
It supports video, voice, and generic data to be sent between peers, allowing developers to build powerful voice- and video-communication solutions.</br>

---

    npm i @babel/core @babel/cli @babel/node -D
    npm i @babel/preset-env -D

### @babel/core

Babel compiler core</br>
All transformations will use your local configuration files.

### @babel/cli

Babel command line</br>
Babel comes with a built-in CLI which can be used to compile files from the command line.

### @babel/node

@babel/node</br>
babel-node is a CLI that works exactly the same as the Node.js CLI, with the added benefit of compiling with Babel presets and plugins before running it.

---

    npm i express
    npm i pug
    npm run dev

https://andybrewer.github.io/mvp/

### Error

> "Buffer 68 65 6c 6c 6f 20 66 72 6f 6d 20 74 68 65 20 62 72 6f 77 73 65 72 21"
> socket.on("message", (message) => {console.log(message.toString('utf8'))});

### SocketIO vs WebSocket

[Socket.IO](https://socket.io/docs/v4/)

a library

Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.

[WebSocket](https://en.wikipedia.org/wiki/WebSocket)

a protocol

WebSocket is a communication protocol which provides a full-duplex and low-latency channel between the server and the browser.

[EDUCBA - Difference between WebSocket and Socket.io](https://www.educba.com/websocket-vs-socket-io/)

왜 Websocket으로 했다가 socket.io로 하는 거지?

### What Socket.IO is not

Socket.IO is NOT a WebSocket implementation.

[socket.io - npm](https://www.npmjs.com/package/socket.io)
[ws - npm](https://www.npmjs.com/package//ws)
