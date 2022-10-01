import React, {useState, useEffect} from "react";
import Navbar from './components/Navbar.jsx'
import Explore from './components/Explore.jsx'
import Profile from './components/Profile.jsx'
import Header from './components/Header.jsx'
import Listings from './components/Listings.jsx'
import NewPost from './components/NewPost.jsx'
import initialStore from './utils/initialStore.js'
import uniqueId from "./utils/uniqueid.js";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// Import and apply global CSS stylesheet
import "./styles/styles.css";
// Import and apply App specific css
import css from "./styles/App.module.css"

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// App function that is reflected across the site
export default function App() {
  const [users, setLikes] = useState(()=>{
    return initialStore.users;
  });

  const [items, setItems] = useState(initialStore.saleitems)
  const [reviews, setReviews] = useState(initialStore.reviews)
  const [page, setPage] = useState("home");
  const [currentUserId, setCurrentUserId] = useState(
    initialStore.currentUserId
  )

  const updateState = () => {
    setCurrentUserId(initialStore.currentUserId);
  }
  
  useEffect(()=>{
	  console.log(users);
	  window.localStorage.setItem('users', JSON.stringify(users));
  }, [users]);
  
  
  function addListing(photo, desc, price, title, category) {
    const user = users.find((u) => u.id === currentUserId);
    console.log(desc, price, title)
    const listing = {
      "id": `item=${items.length + 1}`,
      "sellerId": currentUserId,
      "sellerImg": user.photo,
      "title": title,
      "image": photo,
      "description": desc,
      "price": price, 
      "category": category,
      "date": new Date().toISOString(),
    };
    setItems(items.concat(listing));
    setPage("home");
  }
  function cancelListing() {
    setPage("home");
  }
  
  function addReview(authorId, reviewedId, description) {
    const review = {
      authorId,
      reviewedId,
      description
    }
    setReviews(reviews.concat(review))
  }
  
  return (
      <Router>
      <Seo />
      <div className={css.container}>
        <Header />
        <main role="main" className="wrapper">
          <Routes>
            <Route
              path="/"
              element={
                <Explore
                  currentUserId={currentUserId}
                  users={users}
                  items={items}
                  reviews={reviews}
                  addReview={addReview}
                />
              }
            />
            <Route
              path="/Profile/:userId"
              element={
                <Profile
                  currentUserId={currentUserId}
                  users={users}
                  items={items}
                  reviews={reviews}
                  addReview={addReview}
                />
              }
            />
            <Route
              path="/NewPost"
              element={
                <NewPost
                  addListing={addListing}
                  cancelListing={cancelListing}
                />
              }
            />
            <Route
              path="/:listingId"
              element={
                <Listings 
                  currentUserId={currentUserId}
                  users={users}
                  items={items}
                  reviews={reviews}
                  addReview={addReview}
                  />
              }
              />
          </Routes>
        </main>
        <Navbar 
          currentUserId={currentUserId}
          />
      </div>
      </Router>
  );
}
