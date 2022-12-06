import React from "react";
import styles from "../styles/header.module.css";
import image from "./../images/Photo.png";
import insta from "./../images/insta-logo.png";
import behance from "./../images/behance-logo.png";
import dribble from "./../images/dribble-logo.png";
function Header() {
  const handleOnClick = (e) => {
    e.preventDefault();

    alert(e.target.innerHTML);
  };
  return (
    <div className={styles.container}>
      <div className={styles.hero_container}>
        <div className={styles.text_container}>
          <h1>Hi, I’m Raza</h1>
          <p>
            I design beautiful websites & mobile apps that modern trends demand
          </p>
          <a href="#" onClick={handleOnClick}>
            Contact Me
          </a>
        </div>
        <div className={styles.image_container}>
          <div className={styles.main_image}>
            <img src={image.src} alt="hero-image" />
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles.social_container}>
        <div className={styles.social_icons}>
          <a href="#">
            <img src={insta.src} alt="instagram logo" />
          </a>
          <a href="#">
            <img src={behance.src} alt="" />
          </a>
          <a href="#">
            <img src={dribble.src} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
