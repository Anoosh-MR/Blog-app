import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setcat] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get("http://localhost:5000/api/category");
      setcat(res.data);
    };
    getCat();
  });

  return (
    <div className="sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitles">ABOUT ME</span>
        <img
          src="https://docs.microsoft.com/answers/storage/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg"
          alt="profile-pic"
        />
        <p>
          Do incididunt esse culpa do irure sint enim esse aute. Deserunt non
          ipsum commodo incididunt eu. Proident do occaecat duis ea ad est anim
          eiusmod. Veniam officia voluptate qui sit tempor aute nisi cupidatat
          irure. Qui aliqua consequat amet duis velit commodo duis culpa nulla
          amet proident ut labore laboris.
        </p>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitles">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((cat, index) => (
            <Link key={cat._id} to={`/?cat=${cat.name}`} className="link">
              <li className="sidebarListItem">{cat.name}</li>
            </Link>
          ))}
        </ul>
        <div className="sidebarItems">
          <span className="sidebarTitles">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="SidebarIcon fa-brands fa-square-facebook"></i>
            <i className="SidebarIcon fa-brands fa-square-twitter"></i>
            <i className="SidebarIcon fa-brands fa-square-instagram"></i>
            <i className="SidebarIcon fa-brands fa-square-pinterest"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
