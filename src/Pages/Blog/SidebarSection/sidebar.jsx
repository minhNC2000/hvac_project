import React from "react";
import "./sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="blog__sidebar">
      <form action="/" class="blog__sidebar__search">
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
      <div className="blog__sidebar__feature">
        <h2>Feature News</h2>
        <div className="blog__sidebar__feature__item">
          <h4>
            <a href="#">Where To Look For Cheap Brochure</a>
          </h4>
          <ul>
            <li>By Polly Williams</li>
            <li>Dec 27, 2018</li>
          </ul>
        </div>
        <div className="blog__sidebar__feature__item">
          <h4>
            <a href="#">Using Banner Stands To Increase</a>
          </h4>
          <ul>
            <li>By Evelyn Lane</li>
            <li>Dec 17, 2018</li>
          </ul>
        </div>
        <div className="blog__sidebar__feature__item">
          <h4>
            <a href="#">Promotional Advertising Specialty</a>
          </h4>
          <ul>
            <li>By Don Townsend</li>
            <li>Dec 22, 2018</li>
          </ul>
        </div>
      </div>
      <div className="blog__sidebar__categories">
        <h2>Categories</h2>
        <ul>
          <li>
            <a href="#">Creativity</a>
          </li>
          <li>
            <a href="#">Design</a>
          </li>
          <li>
            <a href="#">Inspiration</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
      </div>
      <div className="blog__sidebar__tag">
        <h2>Tag</h2>
        <a href="#">Car Dealer</a>
        <a href="#">bmw</a>
        <a href="#">Chevrolet</a>
        <a href="#">ferrari</a>
        <a href="#">Honda</a>
        <a href="#">Hatchback</a>
      </div>
      <div className="blog__sidebar__newslatter">
        <h2>Newsletter</h2>
        <p>Subscribe our newsletter gor get</p>
        <form action="#">
          <input type="text" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
