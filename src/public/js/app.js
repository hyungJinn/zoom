// is going to run on the frontend.

const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

// backend doesn't use this function.
// just run on the frondend not backend.
function backendDone(msg) {
  console.log(`The backend says: `, msg);
}

function handleRoomSubmit(event) {
  event.preventDefault();
  // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, backendDone);
  // Not socket.send()
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
