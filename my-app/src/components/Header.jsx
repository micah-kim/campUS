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
              <img className={css.logo} src={'https://i.postimg.cc/JhYTncBS/Screen-Shot-2022-10-02-at-2-51-42-AM.png'} alt="BC Thrift"/>
            </div>
            <div className={css.navItem}>
                <button>
                </button>
            </div>
        </nav>
    );
}

export default Header;