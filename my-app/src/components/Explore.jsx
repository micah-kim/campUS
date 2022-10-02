import React, {useState} from 'react';
import css from '../styles/Explore.module.css';
import Listings from './Listings.jsx';

function Explore(props) {
  
  const {users, items} = props;
  const [checked, setChecked] = useState('All')
  const [filteredItems, setFilteredItems] = useState(items)
  
  function handleChange(e) {
    setChecked(e.target.value)
    if (e.target.value === 'All') {
      setFilteredItems(items)
      return;
    }
    const newItems = items.filter((i) => i.category === e.target.value)
    setFilteredItems(newItems)
  }
  
  return (
    <div className="container">
      <div className={css.searchContainer}>
        <div className={css.checkContainer}>
          <label className={css.labelItem}>
            <input type="radio" value="All" checked={checked === 'All'} onChange={handleChange}/>
            All
            <span className={css.checkmark}></span>
          </label>
          <label className={css.labelItem}>
            <input type="radio" value="Academic" checked={checked === 'Academic'} onChange={handleChange}/>
            Academic
            <span class={css.checkmark}></span>
          </label>
          <label className={css.labelItem}>
            <input type="radio" value="Religious" checked={checked === 'Religious'} onChange={handleChange}/>
            Religious
            <span className={css.checkmark}></span>
          </label>
          <label className={css.labelItem}>
            <input type="radio" value="Greek Life" checked={checked === 'Greek Life'} onChange={handleChange}/>
            Greek Life
            <span className={css.checkmark}></span>
          </label>
        </div>
      </div>
      <div className={css.postContainer}>
        <Listings users={users} items={filteredItems}/>
      </div>
    </div>
  );
}

export default Explore;