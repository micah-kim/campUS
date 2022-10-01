import React from "react";
import css from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";


function Navbar(props) {
  function handleNavChange(page) {
    if (props.onNavChange) {
      props.onNavChange(page);
    }
  }
  
  const {currentUserId} = props

  return (
    <nav className={css.navbar}>
      <div className={css.navItem}>
        <Link to="/NewPost">
            <img className={css.icon} src={"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/icons8-add-image-50.png?v=1650902100632"} alt="NewPost" />
        </Link>
      </div>
      <div className={css.navItem}>
        <Link to="/">
          <img className={css.icon} src={"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/icons8-explore-64.png?v=1650426575189"} alt="Explore" />
        </Link>
      </div>
      <div className={css.navItem}>
        <Link to={`/Profile/${currentUserId}`}>
          <img className={css.icon} src={"https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/icons8-person-64.png?v=1650426575189"} alt="Profile" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
