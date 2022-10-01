import React from 'react';
import css from '../styles/ListingThumbnail.module.css'

function ListingThumbnail(props) {
  return (
    <div className={css.square}>
      <div className={css.content}>
        <img className={css.image} src={props.listing.image} alt="Post Thumbnail"/>
      </div>
    </div>
  )
}

export default ListingThumbnail;