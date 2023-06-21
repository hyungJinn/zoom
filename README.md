# Zoom

Zoom Clone using NodeJS, WebRTC and WebSockets.

### What is a WebRTC?

It allows real-time, peer-to-peer, media exchange between two devices. A connection is established through a discovery and negotiation process called signaling.</br>
It supports video, voice, and generic data to be sent between peers, allowing developers to build powerful voice- and video-communication solutions.</br>
Let the server know where they are in the world.

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

### WebSocket vs Socket.IO

[WebSocket](https://en.wikipedia.org/wiki/WebSocket)

The communication Protocol

WebSocket is the communication Protocol that provides bidirectional communication between the Client and the Server over a TCP connection; WebSocket remains open all the time, so they allow real-time data transfer.

To provides a full-duplex and low-latency channel between the server and the browser.

[Socket.IO](https://socket.io/docs/v4/)

A library

Socket.IO is a library that enables real-time and full-duplex communication between the Client and the Web servers. It uses the WebSocket protocol to provide the interface.

Generally, it is divided into two parts; both WebSocket vs Socket.io are event-driven libraries.

[EDUCBA - Difference between WebSocket and Socket.io](https://www.educba.com/websocket-vs-socket-io/)

왜 Websocket으로 했다가 socket.io로 하는 거지?
websocket은 모든게 message인 거 같던데.
socket.io를 이용하면 "123", "{payload: input.value} - a object" 등을 자유롭게 보낼 수 있다? We can send as much as we want.

### What Socket.IO is not

Socket.IO is NOT a WebSocket implementation.

[socket.io - npm](https://www.npmjs.com/package/socket.io)
[ws - npm](https://www.npmjs.com/package//ws)

Mongo adapter

I'm going to have many servers.
Not all the clients are connected to same server.

https://socket.io/docs/v4/mongo-adapter/

npm i @socket.io/admin-ui
진짜 웬만한 거 다 있구나..

왜 Socket.IO를 사용한 거지?
이게 왜 node.js 강의인 거지?

@alsdn726
Alt + 마우스 좌클릭
Ctrl + Alt + 위, 아래 방향키

멀티라인 한 번에 입력하시면 됩니다 :)

zipperdev9 months ago
@alsdn726 또는 간편하게 마우스 커서(중간 부분)를 여러줄에 끌어서 선택하실 수 있습니다. 참고로 선택된 부분 없이 오로지 텍스트커서만 있을 때 Ctrl + D를 누르시면 그 커서 또는 여러개가 있는 부분의 단어들이 선택됩니다 :)

import 방식
ES6부터는 import / export 라는 방식으로 모듈을 불러오고 내보낸다. ES 모듈의 import는 require과는 다르게 "import {name} from 'module'"과 같이 모듈내에 정의된 특정한 부분만을 불러올 수 있다.

node.js에서는 기본적으 CommonJS 방식의 모듈화를 사용한다. 그래서 ES Modules 방식을 사용할 수 없다.

https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices
