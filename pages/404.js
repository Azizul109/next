import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const error = () => {

    const router = useRouter();

    const handleInput = () => {
        router.push("/");
    }

    return (
      <div>
        <nav>
          <ul className="menu-bar">
            <li>
              <Link href="/">
                <a> Home </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a> About </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a> Contact </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a> Blog </a>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <a> Product </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>404</h1>
            </div>
            <h2>We are sorry, Page not found!</h2>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>

            {/* <Link href="/">
                <a>Back to Homepage</a>
            </Link> */}

            {/* <a href="/">Back To Homepage</a> */}

            <a onClick={handleInput}>Back To Homepage</a>
          </div>
        </div>
      </div>
    );
};

export default error;