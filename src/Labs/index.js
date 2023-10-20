import Assignment3 from "./a3";
import {Link} from "react-router-dom";
import Nav from "../Nav";
import PathParameters from "./a3/PathParameters";
import DynamicStyling from "./a3/DynamicStyling";
import Styles from "./a3/Styles";
import ConditionalOutput from "./a3/ConditionalOutput";
import TodoList from "./a3/todos/TodoList";


function Labs() {
 return (
   <div className="container">
      <Nav/>
     <Assignment3/>
      <PathParameters/>
      <DynamicStyling/>
      <Styles/>
      <ConditionalOutput/>
      <TodoList/>
   </div>
 );
}
export default Labs;