import * as user from "../../models/user.js";

renderTable();

function renderTable() {
  const table = document.querySelector(".rankingTable");
  let position = 1;
  let top5Template = `
  <tr>
    <th>Position</th>
    <th>Name</th>
    <th>Score</th>
    <th>Type</th>
  </tr>`;

  const userData = user.exportAllUsers();
  const sortedData = userData.sort((a, b) => b.score - a.score); // Sort by score in descending order

  for (const player of sortedData) {
    if (position > 5) {
      break; // Exit the loop after displaying the top 5 players
    }

    top5Template += `
    <tr>
      <td>${position}º</td>
      <td>${player.name}</td>
      <td>${player.score}</td>
      <td>${player.type}</td>
    </tr>`;

    position++;
  }

  let template = top5Template; // Initialize the template with the top 5 players

  table.innerHTML = template;

  const show = document.getElementById("showBtn");
  show.addEventListener("click", function () {
    if (show.textContent === "Show Top 5") {
      template = top5Template; // Use the top 5 players template
      show.textContent = "Show All"; // Change the button text to "Show All"
    } else {
      template = `<tr>
    <th>Position</th>
    <th>Name</th>
    <th>Score</th>
    <th>Type</th>
  </tr>`; // Reset the template
      position = 1;

      for (const player of sortedData) {
        template += `
        <tr>
          <td>${position}º</td>
          <td>${player.name}</td>
          <td>${player.score}</td>
          <td>${player.type}</td>
        </tr>`;

        position++;
      }

      show.textContent = "Show Top 5"; // Change the button text back to "Show Top 5"
    }

    table.innerHTML = template; // Update the table with the current template
  });
}