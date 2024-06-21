import * as roomCatalog from "../../models/room.js";
import * as User from "../../models/user.js";
import * as Time from "../../utils/timer.js";

// Load Room
roomCatalog.init();
const roomDoc = roomCatalog.roomDoc;

renderCards();
function renderCards() {
  let template = "";

  for (const room of roomDoc) {
    template += `<div class="row justify-content-center">
        <div class="col-lg-10">
            <div class="card mb-4">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${room.icon}" alt="Fundamentals" class="img-fluid" style="height: 120px">
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <div class="card-body">
                            <h5 class="card-title">${room.name}</h5>
                            <p class="card-text">${room.description}</p>
                            <a href="./room.html?roomId=${room.id}" class="btn btn-primary btn-custom" id="play">Play</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>`;
  }

  const container = document.querySelector(".container");
  container.innerHTML = template;

  const playButtons = document.querySelectorAll("#play");
  playButtons.forEach((button) => {
    button.addEventListener("click", async function () {
      await sessionStorage.removeItem("remainingTime");
      Time.startTime();
    });
    });
}