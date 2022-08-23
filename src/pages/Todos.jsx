import TodoListContainer from "../containers/TodoListContainer";
import TodoFormContainer from "../containers/TodoFormContainer";
import { Link } from "react-router-dom";

export default function Todos() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/users">USERS</Link>
        </li>
      </ul>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  );
}
