// Class of User Model
export class User {
  id = 0;
  name = "";
  email = "";
  dateOfBirth = "";
  gender = "";
  password = "";
  type = "";
  avatar = "";
  questions = [0,0,0];
  rooms = [];
  score = 0;

  constructor(id, name, email, dateOfBirth, gender, password,type) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.gender = gender;
    this.password = password;
    this.type = type;
    this.avatar =
      "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png";
    this.questions = [];
    this.rooms = [];
    this.score = 0;
  }

  // Methods
  addRoom(room) {
    this.rooms.push(room);
  }

  deleteRoom(room) {
    this.rooms.pop(room);
  }

  addQuestion(questions) {
    this.questions.push(questions);
  }

  deleteQuestion(question) {
    this.questions.pop(question);
  }

  changePassword(password) {
    this.oldPassword = password;
  }
}

// Load users info from local storage
export let userDoc = [];

// Load Admin ROOT Account
export function init() {
  userDoc = localStorage.userDoc
    ? JSON.parse(localStorage.userDoc)
    : [
        {
          id: 1,
          name: "admin",
          email: "admin@email.com",
          dateOfBirth: getAge("01-01-2000"),
          gender: "Other",
          password: "admin123",
          type: "admin",
          avatar: "../public/images/user.png",
          questions: [],
          rooms: [],
          score: 10000,
        },
        {
          id: 2,
          name: "linusTorvalds",
          email: "ltorvalfs@email.com",
          dateOfBirth: getAge("28-12-1969"),
          gender: "Male",
          password: "ubuntuDev",
          type: "user",
          avatar: "../public/images/linux.png",
          questions: [],
          rooms: [],
          score: 450,
        },
        {
          id: 3,
          name: "Tberners-lee",
          email: "www@email.com",
          dateOfBirth: getAge("08-06-1955"),
          gender: "Male",
          password: "http",
          type: "user",
          avatar: "../public/images/user.png",
          questions: [],
          rooms: [],
          score: 200,
        },
        {
          id: 4,
          name: "GraceHopper",
          email: "ghooper@email.com",
          dateOfBirth: getAge("09-12-1906"),
          gender: "Female",
          password: "compiler",
          type: "user",
          avatar: "../public/images/user.png",
          questions: [],
          rooms: [],
          score: 2000,
        },
        {
          id: 5,
          name: "AlanTuring",
          email: "turingTest@email.com",
          dateOfBirth: getAge("23-06-1912"),
          gender: "Male",
          password: "Test",
          type: "user",
          avatar: "../public/images/user.png",
          questions: [],
          rooms: [],
          score: 1900,
        },
        {
          id: 6,
          name: "BjarneStroustrup",
          email: "bjarnes@email.com",
          dateOfBirth: getAge("30-12-1950"),
          gender: "Male",
          password: "cplusplus",
          type: "user",
          avatar: "../public/images/user.png",
          questions: [0,0,0],
          rooms: [],
          score: 1500,
        },
        {
          id: 7,
          name: "LarryPage",
          email: "google@email.com",
          dateOfBirth: getAge("26-03-1973"),
          gender: "Male",
          password: "pagerank",
          type: "user",
          avatar: "../public/images/user.png",
          questions: [],
          rooms: [],
          score: 1450,
        },
      ];

  localStorage.setItem("userDoc", JSON.stringify(userDoc));
  localStorage.setItem("Score",JSON.stringify(25))
}

// Generate next ID
export function generateId(id) {
  id = userDoc.length + 1;
  return id;
}

export function createUser(
  id,
  name,
  email,
  age,
  gender,
  password,
  type = "user"
) {

  if (type != "admin") {
    type = "user";
  }
  userDoc.push(
    new User(generateId(id), name, email, age, gender, password, type)
  );
  localStorage.userDoc = JSON.stringify(userDoc);
}

// Login
export function login(email, password) {
  let username = userDoc.find(
    (username) => username.email === email && username.password === password
  );
  if (username) {
    sessionStorage.userInSession = JSON.stringify(username);
    return true;
  }
  return false;
}

// Logout
export function logout() {
  sessionStorage.removeItem("userInSession");
}

export function deleteUser(name) {
  const position = userDoc.findIndex((user) => user.name === name);
  if (position !== -1) {
    userDoc.splice(position, 1);
    localStorage.userDoc = JSON.stringify(userDoc);
  } else {
    return new Error(`${name}: is not present in the database`);
  }
}

// Calculate the Age
export function getAge(dateOfBirth) {
  const currentDate = new Date();
  const birthDate = new Date(dateOfBirth);

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDate.getMonth();
  const currentDay = currentDate.getDate();
  const birthDay = birthDate.getDate();

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
}

// Check if there's and user which is already logged in.
export function inSession() {
  return sessionStorage.userInSession ? true : false;
}

// Return the user that's authenticated
export function userAuth() {
  return JSON.parse(sessionStorage.userInSession);
}

export function exportAllUsers() {
  return userDoc;
}