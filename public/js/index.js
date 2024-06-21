import * as user from "../../models/user.js";
import * as room from "../../models/room.js";
import * as question from "../../models/question.js";
import * as navBar from "../js/navbar.js"
import * as Time from "../../utils/timer.js";

user.init();
navBar.navBar()
room.init();
question.init();
Time.init();