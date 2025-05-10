import Calculator from "../Projects/Calculator/Calculator.jsx";
import Notes from "../Projects/NotesApp/Notes.jsx";
import Todo from "../Projects/ToDo/Todo.jsx";
import Weather from "../Projects/WeatherApp/Weather.jsx";
import Analytics from "../Projects/CricketAnalytics/Analytics.jsx";

const projectList = [
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
  }
];

export default projectList;
