// is going to run on the frontend.

const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function handleRoomSubmit(event) {
  event.preventDefault();
  // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  const input = form.querySelector("input");
  socket.emit("enter_room", { payload: input.value }, () => {
    console.log("server is done!");
  });
  // Not socket.send()
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
