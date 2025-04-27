import Calculator from "../Projects/Calculator/Calculator.jsx";
import Todo from "../Projects/ToDo/Todo.jsx";
import Weather from "../Projects/WeatherApp/Weather.jsx";

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
  }
];

export default projectList;
