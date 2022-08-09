import React from 'react';
import Navbar from '../components/Navbar';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
    return (
      <div>
        <Navbar></Navbar>
        {data.slice(0, 4).map((curElem) => {
          return (
            <div key={curElem.id} className="ssr-styles">
              <h3>{curElem.id}</h3>
              <h2>{curElem.title}</h2>
            </div>
          );
        })}
      </div>
    );
};

export default index;