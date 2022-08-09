import React from 'react';
import Navbar from "./components/Navbar";
import styles from "../styles/index.module.css";
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="arif" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <header className={styles.header}>
        <div className="brand_box">
          <Navbar></Navbar>
        </div>

        <h1>hello</h1>
      </header>
    </>
  );
};

export default index;