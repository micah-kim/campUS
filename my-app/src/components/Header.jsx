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
              <img className={css.logo} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png'} alt="BC Thrift"/>
            </div>
            <div className={css.navItem}>
                <button>
                </button>
            </div>
        </nav>
    );
}

export default Header;