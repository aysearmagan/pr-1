import React from "react";
import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from './MainHeader.module.css'
import { Link } from "react-router-dom";

const MainHeader = ({ onCreatePost }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link className={classes.button} to='create-post' ><MdPostAdd size={18} />New Post</Link>
      </p>
    </header>
  );
};

export default MainHeader;