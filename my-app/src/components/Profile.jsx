import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import React, {useState} from "react";
import ListingThumbnail from "./ListingThumbnail";
import css from "../styles/Profile.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Profile(props) {
  const { userId } = useParams();
  const { currentUserId } = props;
  const [reviewDescription, setReviewDescription] = useState("")
  const user = props.users.find((u) => u.id === userId);
  const listings = props.items.filter((p) => p.sellerId === userId);
  const reviews = props.reviews.filter((f) => f.reviewedId === userId);
  const reviewed = props.reviews.filter((f) => f.authorId === userId);
  
  function handleReviewChange(e) {
    setReviewDescription(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.addReview(currentUserId, userId, reviewDescription)
    setReviewDescription("")
  }
  
  return (
    <div className={"container"}>
      <div className={css.profileContainer}>
        <div className={css.profileContainer2}>
          <div className={`${css.flex} ${css.justifyCenter}`}>
            <img src={user.photo} className={css.profile} />
          </div>
          <span className={css.blackBold}>{user.name}</span>
          <br />
          <div className={css.userBio}>{user.bio}</div>
          <div className={`${css.flex} ${css.info}`}>
            <div className={`${css.center} ${css.gray}`}>
              <span className={css.blackBold}>{listings.length}</span>
              Listings
            </div>
            <div className={`${css.center} ${css.gray}`}>
              <span className={css.blackBold}>{reviews.length}</span>
              Reviews
            </div>
            <div className={`${css.center} ${css.gray}`}>
              <span className={css.blackBold}>{reviewed.length}</span>
              Reviewed
            </div>
          </div>
          <div className={css.posts}>
            {listings.map((listing, i) => (
              <Link key={i} to={`/${listing.id}`}>
                <ListingThumbnail listing={listing} />
              </Link>
            ))}
          </div>
          <h1>User Reviews</h1>
          <div>
            {reviews.map((review, i) => {
              const user = props.users.find((u) => u.id === review.authorId);
              return (
                <div className={css.reviewsList} key={`review-${i}`}>
                  <div className={`${css.row} ${css.userProfile}`}>
                    <img src={user.photo} />
                    <div className={css.name} to={`Profile/${user.id}`}>
                      <div>{user.id}</div>
                    </div>
                  </div>
                  <div>{review.description}</div>
                </div>
              );
            })}
          </div>
          {currentUserId !== userId ? (
            <div>
              <h1>Write a review</h1>
              <textarea
            placeholder="Write review..."
            rows="3"
            value={reviewDescription}
            onChange={handleReviewChange}
            />
              <div className={css.actions}>
                <button onClick={handleSubmit}>Share</button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
