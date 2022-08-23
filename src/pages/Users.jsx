import { Link } from "react-router-dom";
import UserListContainer from "../containers/UserListContainer";

export default function Users() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/todos">TODOS</Link>
        </li>
      </ul>

      <UserListContainer />
    </div>
  );
}
