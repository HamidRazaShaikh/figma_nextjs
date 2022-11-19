import React from "react";
import styles from "../styles/nav.module.css";


function Nav() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>D.</div>

      <div className={styles.options}>
        <ul>
          <li>blog</li>
          <li>contact</li>
          <li>about</li>
        </ul>
        <div className = {styles.iconContainer}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_16)">
              <path
                d="M19.375 17.5H18.3875L18.0375 17.1625C19.2625 15.7375 20 13.8875 20 11.875C20 7.3875 16.3625 3.75 11.875 3.75C7.3875 3.75 3.75 7.3875 3.75 11.875C3.75 16.3625 7.3875 20 11.875 20C13.8875 20 15.7375 19.2625 17.1625 18.0375L17.5 18.3875V19.375L23.75 25.6125L25.6125 23.75L19.375 17.5ZM11.875 17.5C8.7625 17.5 6.25 14.9875 6.25 11.875C6.25 8.7625 8.7625 6.25 11.875 6.25C14.9875 6.25 17.5 8.7625 17.5 11.875C17.5 14.9875 14.9875 17.5 11.875 17.5Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_16">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Nav;
