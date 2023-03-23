import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="my-3">
      <Link to="/create">
        <button className="btn btn-danger m-1">Create Survey</button>
      </Link>
      <Link to="/published">
        <button className="btn btn-danger m-1">Take Survey</button>
      </Link>
    </div>
  );
};

export default Menu;
