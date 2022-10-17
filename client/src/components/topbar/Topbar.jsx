import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css";

const Topbar = () => {
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">
            <Link className="link" to="/">
              <i className="fa-solid fa-house-user"></i>
            </Link>
          </li>

          <li className="topListItems">
            <Link className="link" to="/write">
              <i className="fa-solid fa-pen-nib"></i>
            </Link>
          </li>
          <li className="topListItems">
            <Link className="link" to="/contact">
              <i className="fa-solid fa-address-book"></i>
            </Link>
          </li>
          <li className="topListItems" onClick={handleLogout}>
            {user && <i className="fa-solid fa-right-from-bracket"></i>}
          </li>
        </ul>
      </div>
      <div className="topRignt">
        {user ? (
          <Link to="/settings">
            <img
              className="topImage"
              src={
                user.profilePicture ? PF + user.profilePicture : PF + "png.png"
              }
              alt="profile-pic"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItems">
              <Link className="link" to="/login">
                <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
            </li>
            <li className="topListItems">
              <Link className="link" to="/register">
                <i className="fa-solid fa-user-plus"></i>
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
