import Calculator from "../Projects/Calculator/Calculator.jsx";
import Notes from "../Projects/NotesApp/Notes.jsx";
import Todo from "../Projects/ToDo/Todo.jsx";
import Weather from "../Projects/WeatherApp/Weather.jsx";
import Analytics from "../Projects/CricketAnalytics/Analytics.jsx";
import PollMasterIndex from "../Projects/PollMaster/PollMasterIndex.jsx";

const projectList = [
  {
    name: "TextMIya",
    path: "https://rafayurgit.github.io/TextMiya/",
    // component: TextMiya,
    description: "Text utility app with dark mode",
  },
  {
      name:"Bubble Game",
      path:"https://github.com/Rafayurgit/BubbleGameJS",
      // component: Notes,
      description: "This is an mini fun game of bubbles i created using HTML,CSS & JS, its a mini and fun game."
  },
  {
    name: "Calculator",
    path: "/project/calculator",
    component: Calculator,
    description: "Basic calculator built with hooks",
  },
  {
    name:"Todo",
    path:"/project/todo",
    component: Todo,
    description:"Simple todo list with add/remove functionality"
  }, 
  {
    name:"WeatherApp",
    path:"/project/weatherApp",
    component: Weather,
    description: "Check your city's weather"
  },
  {
    name:"NoteApp",
    path:"/project/NoteApp",
    component: Notes,
    description: "A fully note app"
  },
  {
    name:"CricketAnalytics",
    path:"/project/analytics",
    component: Analytics,
    description:"Check the status of your fav match"
  },
  {
    name: "Poll Master",
    path: "/project/pollmaster/*",
    component: PollMasterIndex,
    description: "Create, vote and view polls"
  }
];

export default projectList;
