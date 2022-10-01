import React from "react";
import timespan from "../utils/timespan.js";
import css from "../styles/Listings.module.css";
import { Link, useParams } from "react-router-dom";

function Listings(props) {
  const {items, users} = props;
  const { listingId } = useParams();
  
  return (
    <div className={css.container}>
      {listingId ? 
        items.filter((listing) => listing.id === listingId).sort((a, b)=>new Date(b.date) - new Date(a.date)).map((ele, index) => {
        const user = users.find((us) => us.id === ele.sellerId)
        return (
          <div className={css.itemContainer} key={`${index}-listing`}>
            <div className={`${css.row} ${css.userProfile}`}>
              <img src={ele.sellerImg}/>
              <Link className={css.sellerName} to={`profile/${ele.sellerId}`}>
                <div>{ele.sellerId}</div>
              </Link>
            </div>
            <div>
              <div className={css.imgContainer}>
                <img
                  src={ele.image}
                  className={css.listingImg}
                />
              </div>
              <div className={css.sellerContainer}>
                <div className={css.listingInfo}>
                  <div className={css.listingInfoItem}>{ele.title}</div>
                  <div className={css.listingInfoItem}>${ele.price}</div>
                  <div className={css.listingInfoItem}>{timespan(ele.date)}</div>
                </div>
                <div className={css.buttonContainer}>
                  <a href={"tel:" + user.phone} className={css.contactSellerButton}>
                    <div className={css.contactSellerLink}>Phone</div>
                  </a>
                  <a href={"mailto: " + user.email} className={css.contactSellerButton}>
                    <div className={css.contactSellerLink}>Email</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })
        :
        
        items.sort((a, b)=>new Date(b.date) - new Date(a.date)).map((ele, index) => {
        const user = users.find((us) => us.id === ele.sellerId)
        return (
          <div className={css.itemContainer} key={`${index}-listing`}>
            <div className={`${css.row} ${css.userProfile}`}>
              <img src={ele.sellerImg}/>
              <Link className={css.sellerName} to={`profile/${ele.sellerId}`}>
                <div>{ele.sellerId}</div>
              </Link>
            </div>
            <div>
              <div className={css.imgContainer}>
                <img
                  src={ele.image}
                  className={css.listingImg}
                />
              </div>
              <div className={css.sellerContainer}>
                <div className={css.listingInfo}>
                  <div className={css.listingInfoItem}>{ele.title}</div>
                  <div className={css.listingInfoItem}>${ele.price}</div>
                  <div className={css.listingInfoItem}>{timespan(ele.date)}</div>
                </div>
                <div className={css.buttonContainer}>
                  <a href={"tel:" + user.phone} className={css.contactSellerButton}>
                    <div className={css.contactSellerLink}>Phone</div>
                  </a>
                  <a href={"mailto: " + user.email} className={css.contactSellerButton}>
                    <div className={css.contactSellerLink}>Email</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Listings;
