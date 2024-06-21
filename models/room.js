import { generateId } from "./user.js";
import * as Question from "./question.js";

Question.init();
export class Room {
  id = 0;
  name = "";
  description = "";
  photo = "";
  icon = "";
  levels = [];

  constructor(id, name, description, photo, icon, levels) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photo = photo;
    (this.icon = icon), (this.levels = levels);
  }

  // Methods

  addLevel(level) {
    this.levels.push(level);
  }

  addQuestions(levelId, questions) {
    const level = this.levels.find((level) => level.id === levelId);

    if (level) {
      level.questions.push(...questions);
    } else {
      throw new Error(`Level with id ${levelId} not found in the room.`);
    }
  }

  removeLevel(levelName) {
    for (let level in this.levels) {
      if (this.levels[level].name === levelName) {
        this.levels.splice(level, 1);
        return;
      }
    }
    throw Error(`Level ${levelName} not found`);
  }
}

// Load Rooms from local storage
export let roomDoc;

export function init() {
  roomDoc = localStorage.roomDoc
    ? JSON.parse(localStorage.roomDoc)
    : [
        {
          id: 1,
          name: "Chapter 1:The Beggining",
          description: "First Room, will you make it to the end?",
          photo: "../public/images/room1.png",
          icon: "../public/images/room1 icon.png",
          levels: [
            {
              id: 1,
              name: "Fundamentals",
              questions: [
                Question.questionsDoc[0],
                Question.questionsDoc[1],
                Question.questionsDoc[2],
                Question.questionsDoc[3],
                Question.questionsDoc[4],
                Question.questionsDoc[5],
              ],
              coord: "1000,400,1100,450",
            },
            {
              id: 2,
              name: "Conditionals",
              questions: [
                Question.questionsDoc[6],
                Question.questionsDoc[7],
                Question.questionsDoc[8],
                Question.questionsDoc[9],
              ],
              coord: "250,285,290,340",
            },
          ],
        },
        {
          id: 2,
          name: "Chapter 2:Working Hard",
          description: "Second Room, this next will not be that easy!",
          photo: "../public/images/level2.png",
          icon: "../public/images/room2 icon.png",
          levels: [
            {
              id: 1,
              name: "Loops",
              questions: [
                Question.questionsDoc[10],
                Question.questionsDoc[11],
                Question.questionsDoc[12],
                Question.questionsDoc[13],
                Question.questionsDoc[14],
                Question.questionsDoc[15],
              ],
              coord: "440,220,500,275",
            },
            {
              id: 2,
              name: "Functions",
              questions: [
                Question.questionsDoc[16],
                Question.questionsDoc[17],
                Question.questionsDoc[18],
                Question.questionsDoc[19],
              ],
              coord: "450,180,513,225",
            },
            { id: 4, coord: "700,330,800,370" },
          ],
        },
        {
          id: 3,
          name: "Chapter 3:Final Bosses",
          description: "You're not ready for this.",
          photo: "../public/images/room3.jpg",
          icon: "../public/images/room3 icon.png",
          levels: [
            {
              id: 1,
              name: "Arrays",
              questions: [
                Question.questionsDoc[20],
                Question.questionsDoc[21],
                Question.questionsDoc[22],
                Question.questionsDoc[23],
                Question.questionsDoc[24],
                Question.questionsDoc[25],
              ],
              coord: "1290,110,1370,170",
            },
            {
              id: 2,
              name: "Objects",
              questions: [
                Question.questionsDoc[26],
                Question.questionsDoc[27],
                Question.questionsDoc[28],
                Question.questionsDoc[29],
                Question.questionsDoc[30],
                Question.questionsDoc[31],
              ],
              coord: "400,325,446,380",
            },
          ],
        },
      ];

  localStorage.setItem("roomDoc", JSON.stringify(roomDoc));
}

export function addRoom(name, description, photo) {
  if (roomDoc.some((room) => room.name === name)) {
    throw Error(`Room ${name} already exists!`);
  } else {
    const newId = roomDoc.length + 1;
    const newRoom = new Room(newId, name, description, photo);
    roomDoc.push(newRoom);
    localStorage.roomDoc = JSON.stringify(roomDoc);
  }
}

export function deleteRoom(roomId) {
  const position = roomDoc.findIndex((user) => user.id === roomId);
  if (position !== -1) {
    roomDoc.splice(position, 1);
    localStorage.setItem("roomDoc", JSON.stringify(roomDoc));
  } else {
    return new Error(`${roomId}: is not present in the database`);
  }
}

export function exportRooms() {
  console.log(roomDoc);
  return roomDoc;
}