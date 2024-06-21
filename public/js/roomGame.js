import * as Room from "../../models/room.js";

Room.init();

//Get variable in url
const urlParams = new URLSearchParams(window.location.search);
const roomId = urlParams.get("roomId");

//Get id from roomDoc
const room = Room.roomDoc.filter((item) => item.id == roomId);

const h3 = document.querySelector(".top-container h3");
h3.innerHTML = room[0].name;
renderRoom();

function renderRoom() {
  let roomContainer = document.querySelector(".room-container");
  let template = `<img src="${room[0].photo}" usemap="#room" alt="room" class="img-fluid rounded mx-auto d-block" width="1500px" height="720px">`;

  template += `<map name="room">`;

  for (let i = 0; i < room[0].levels.length; i++) {
    const level = room[0].levels[i];
    const isLastLevel = i === room[0].levels.length - 1;

    if (isLastLevel) {
      template += `<area onclick="openPDF('${level.url}')" coords=${level.coord} shape="rect">`;
    } else {
      template += `<area target="" alt="" title="" href="./levels.html?levelId=${level.id}&roomId=${roomId}" coords=${level.coord} shape="rect">`;
    }
  }

  template += `</map>`;
  roomContainer.innerHTML = template;
}

function openPDF(url) {
  window.open(url, "_blank");
}