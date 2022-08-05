import React from 'react';
import Navbar from "./components/Navbar";
import styles from "../styles/index.module.css";

const index = () => {
  return (
    <>
      <header className={styles.header}>
        <div className='brand_box'>
          <Navbar></Navbar>
        </div>

        <h1>hello</h1>
      </header>
    </>
  );
};

export default index;