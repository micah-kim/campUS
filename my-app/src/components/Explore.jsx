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
            <input type="radio" value="Furniture" checked={checked === 'Furniture'} onChange={handleChange}/>
            Furniture
            <span class={css.checkmark}></span>
          </label>
          <label className={css.labelItem}>
            <input type="radio" value="Clothes" checked={checked === 'Clothes'} onChange={handleChange}/>
            Clothes
            <span className={css.checkmark}></span>
          </label>
          <label className={css.labelItem}>
            <input type="radio" value="Other" checked={checked === 'Other'} onChange={handleChange}/>
            Other
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