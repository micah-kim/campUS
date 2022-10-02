import React, { useState } from "react";
import css from "../styles/NewPost.module.css";
import FileLoader from "./FileLoader.js";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function NewPost(props) {
  const [dragging, setDragging] = useState(false); // to show a dragging effect
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [itemTitle, setTitle] = useState("");
  const [category, setCategory] = useState("Furniture");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(""); // to show an error message
  const navigate = useNavigate();

  function handleFileDragEnter(e) {
    setDragging(true);
  }
  function handleFileDragLeave(e) {
    setDragging(false);
  }
  function handleFileDrop(e) {
    if (e.dataTransfer.types.includes("Files") === false) {
      return;
    }
    if (e.dataTransfer.files.length >= 1) {
      let file = e.dataTransfer.files[0];
      if (file.size > 10000000) {
        // larger than 10 MB
        return;
      }
      if (file.type.match(/image.*/)) {
        let reader = new FileReader();
        reader.onloadend = (e) => {
          // TODO: call setPhoto with e.target.result (this is a Base64 image string)
          setPhoto(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
    setDragging(false);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleDescChange(e) {
    setDesc(e.target.value);
  }
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (photo === null) {
      setError("Photo must be added");
      return;
    }
    console.log('here in post', desc, price, itemTitle, category)
    props.addListing(photo, desc, price, itemTitle, category);
    setError("");
    navigate("/");
  }
  
  function handleCategoryChange(e) {
    setCategory(e.target.value)
  }
  function cancelListing() {
    props.cancelListing();
  }
  return (
    <div className="container">
      <div className={css.bodyContainer}>
        <div className={css.pageContainer}>
        <div className={css.pageTitle}>
          <h1 className={css.titleName} style={{textAlign: 'center'}}>Create New Event</h1>
        </div>
        <div className={css.photo}>
          {!photo ? (
            <div className={css.message}>Drop your image</div>
          ) : (
            <img src={photo} alt="New Post" />
          )}
          <FileLoader
            onDragEnter={handleFileDragEnter}
            onDragLeave={handleFileDragLeave}
            onDrop={handleFileDrop}
          >
            <div
              className={[css.dropArea, dragging ? css.dragging : null].join(" ")}
            ></div>
          </FileLoader>
        </div>
        <div className={css.desc}>
          <textarea
            placeholder="Insert title..."
            rows="3"
            value={itemTitle}
            onChange={handleTitleChange}
          />
          <textarea
            placeholder="Insert description..."
            rows="3"
            value={desc}
            onChange={handleDescChange}
          />
          <textarea
            placeholder="Insert date..."
            rows="3"
            value={price}
            onChange={handlePriceChange}
          />
          <select onChange={handleCategoryChange}>
            <option value="Academics" >Academics</option>
            <option value="Religious">Religious</option>
            <option value="Greek Life">Greek Life</option>
          </select>
        </div>
        <div className={css.error}>{error}</div>
        <div className={css.actions}>
          <button onClick={() => navigate("/")}>Cancel</button>
          <button onClick={handleSubmit}>Share</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default NewPost;
