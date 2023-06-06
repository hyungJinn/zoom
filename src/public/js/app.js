// is going to run on the frontend.

const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;
let nickName;

// // backend doesn't use this function.
// // just run on the frondend, not backend.
// function backendDone(msg) {
//   console.log(`The backend says: `, msg);
// }

function addMessage(message) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = message;
  ul.appendChild(li);
}

function handleMessageSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#msg input");
  const value = input.value;
  socket.emit("new_message", input.value, roomName, () => {
    addMessage(`You: ${value}`);
  });
  input.value = "";
}

function handleNicknameSubmit(event) {
  event.preventDefault();
  const input = room.querySelector("#name input");
  const value = input.value;
  socket.emit("nickname", value);
}

function showRoom() {
  welcome.hidden = true;
  room.hidden = false;
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
  const msgForm = room.querySelector("#msg");
  const nameForm = room.querySelector("#name");
  msgForm.addEventListener("submit", handleMessageSubmit);
  nameForm.addEventListener("submit", handleNicknameSubmit);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  // const input = form.querySelector("input");
  const roomNameIpt = form.querySelector("#roomName");
  const nickNameIpt = form.querySelector("#nickName");
  socket.emit("enter_room", roomNameIpt.value, nickNameIpt.value, showRoom);
  // Not socket.send()
  roomName = roomNameIpt.value;
  roomNameIpt.value = "";
  const changeNicknameIpt = room.querySelector("#name input");
  changeNicknameIpt.value = nickNameIpt.value;
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("welcome", (user, newCount) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName} (${newCount})`;
  addMessage(`${user} joined!`);
});

socket.on("bye", (left, newCount) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName} (${newCount})`;
  addMessage(`${left} left:(`);
});

socket.on("new_message", addMessage);
// socket.on("new_message", (msg) => {
//   addMessage(msg);
// });

socket.on("room_change", (rooms) => {
  const roomList = welcome.querySelector("ul");
  roomList.innerText = "";
  if (rooms.length === 0) {
    return;
  }
  // if the above code is absent, previous roomlist is still alive.
  rooms.forEach((room) => {
    const li = document.createElement("li");
    li.innerText = room;
    roomList.append(li);
  });
});
// socket.on("room_change", (msg) => console.log(msg));
