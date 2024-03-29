import React, { useState } from "react";
import styles from "../styles/nav.module.css";

function Nav() {
  const [search, setsearch] = useState(true);
  const [menuToggle, setMenuToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnClick = (e) => {
    e.preventDefault();

    alert(e.target.innerHTML);
  };

  const handleKeyDown = (e) => {


    if (e.key === "Enter") {
      e.preventDefault();
      alert(e.target.value);
    }
  };

  const handleChange = (e) => {
    // alert("hello");

     setSearchTerm(e.target.value)
  };

  const handleShowSearch =()=>{

    alert(searchTerm);
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>R.</div>

      <div className={styles.searchBox}>
        <input
          value={searchTerm}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder="Search here..."
        />
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleShowSearch}
         
        >
          <g clipPath="url(#clip0_1_16)">
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

      <div className={styles.options}>
        <ul>
          <li onClick={handleOnClick}>blog</li>
          <li onClick={handleOnClick}>contact</li>
          <li onClick={handleOnClick}>about</li>
        </ul>

        {/* icon containeer */}

        <div
          className={styles.iconContainer}
          onClick={() => setsearch(!search)}
        >
          {search ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_16)">
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
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3_100)">
                <path
                  d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_100">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </div>
      </div>

      {/* menu container */}
      <div className={styles.menuIcon}>
        {!menuToggle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 122.879 103.609"
            xmlSpace="preserve"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <path
              fillRule="evenodd"
              d="M10.368 0h102.144c5.703 0 10.367 4.665 10.367 10.367 0 5.702-4.664 10.368-10.367 10.368H10.368C4.666 20.735 0 16.07 0 10.368 0 4.665 4.666 0 10.368 0zm0 82.875h102.144c5.703 0 10.367 4.665 10.367 10.367 0 5.702-4.664 10.367-10.367 10.367H10.368C4.666 103.609 0 98.944 0 93.242c0-5.702 4.666-10.367 10.368-10.367zm0-41.437h102.144c5.703 0 10.367 4.665 10.367 10.367 0 5.702-4.664 10.368-10.367 10.368H10.368C4.666 62.173 0 57.507 0 51.805s4.666-10.367 10.368-10.367z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setMenuToggle(!menuToggle)}
          >
            <g clipPath="url(#clip0_3_100)">
              <path
                d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_100">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}

        {/* option container */}

        {menuToggle ? (
          <div className={styles.menuList}>
            <ul>
              <li onClick={handleOnClick}>blog</li>
              <li onClick={handleOnClick}>contact</li>
              <li onClick={handleOnClick}>about</li>
            </ul>
          </div>
        ) : null}
      </div>
      {!search ? (
        <div className={styles.bottomSearch}>
          <input
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Search here..."
          />
        </div>
      ) : null}
    </div>
  );
}

export default Nav;
