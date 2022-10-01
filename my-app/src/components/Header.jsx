import React from 'react';
import css from '../styles/Header.module.css';


function Header() {
  return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button>
                </button>
            </div>
            <div className={css.navItem}>
              <img className={css.logo} src={'https://cdn.glitch.global/ce0002dc-953f-4129-932c-7d7d80b9c980/logo.jpg?v=1650481144790'} alt="BC Thrift"/>
            </div>
            <div className={css.navItem}>
                <button>
                </button>
            </div>
        </nav>
    );
}

export default Header;