import React, { Fragment } from "react";
import './homepage.css';
import { useNavigate} from 'react-router-dom';
import Login from "./Login";


const Homepage = ({home, setHome}) => {
    const navigate = useNavigate();
    console.log(sessionStorage.getItem("user"));

    return(
    <div>
        {(sessionStorage.getItem("user")===null)?
        <Login />: 
        <div>
    <nav className="navigation">
      <a href="#" className="logo">
        <span>M</span>MM
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon" />
      </label>
      <ul className="menu">
        <li>
          <a href="Home Page HTML.html" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#category">Categories</a>
        </li>
        <li>
          <a href="#popular-bundle-pack">Packages</a>
        </li>
        <li>
          <a>Contact&nbsp;Us</a>
        </li>
        <li>
          <a>Feedback</a>
        </li>
        <li>
          <a>About&nbsp;us</a>
        </li>
        <li>
          <a href="#download-app">App</a>
        </li>
        {
            (sessionStorage.getItem("user")===null)?
            <div>
                <li>
                <a onClick={() => {navigate('/Login')}}>Sign&nbsp;up</a>
                </li>
                <li>
                <a onClick={() => {navigate('/Login')}}>Login</a>
                </li>
            </div>:
            <li>
                <a>{sessionStorage.getItem("user")}</a>
            </li>
        }
      </ul>
      <div className="right-nav">
        <a  className="like">
          <i className="fas fa-heart" />
          <span>2</span>
        </a>
        <a className="cart">
          <i className="fas fa-shopping-cart" />
          <span>2</span>
        </a>
        <a  className="user-profile">
          <i className="fas fa-user" />
          <span>1</span>
        </a>
      </div>
    </nav>
    <div id="search-banner">
      <img alt="bg" className="bg-1" src="https://i.imgur.com/h8pXo1s.png" />
      <img
        alt="bg"
        className="bg-1_rev"
        src="https://i.imgur.com/h8pXo1s.png"
      />
      <img alt="bg-2" className="bg-2" src="https://i.imgur.com/2smuQIz.png" />
      <div className="search-banner-text">
        <h1>Order Your daily Groceries</h1>
        <strong>#Free Delivery</strong>
        <i className="fas fa-search" />
        <button className="order_now_button" onClick={() => {navigate('/search')}}>FIND YOUR GROCERIES NOW</button>
        <h3>
          <a href="Best Deals HTML.html" style={{ color: "#40aa54" }}>
            Click here to learn about today's best deals
          </a>
        </h3>
      </div>
    </div>
    <section id="category">
      <div className="category-heading">
        <h2>Category</h2>
        <span>All</span>
      </div>
      <div className="category-container">
        <a className="category-box" href="Fruits Category Page HTML.html">
          <img
            alt="Fruits and Vegetables"
            src="https://i.imgur.com/lvk68rp.png"
          />
          <span>Fruits &amp; Vegetables</span>
        </a>
        <a className="category-box" href="Medicine Category Page HTML.html">
          <img alt="Medicines" src="https://i.imgur.com/4sjlmg3.png" />
          <span>Medicine</span>
        </a>
        <a className="category-box" href="Baby Care Category Page HTML.html">
          <img alt="Baby Care Products" src="https://i.imgur.com/uvd01HH.png" />
          <span>Baby Care</span>
        </a>
        <a className="category-box" href="Office Category Page HTML.html">
          <img alt="Fish" src="https://i.imgur.com/N5a3WUT.png" />
          <span>Stationary</span>
        </a>
        <a className="category-box" href="Beauty Category Page HTML.html">
          <img alt="Beauty Products" src="https://i.imgur.com/Bm0yLex.png" />
          <span>Beauty</span>
        </a>
        <a className="category-box" href="Gardening Category Page HTML.html">
          <img alt="Gardening Products" src="https://i.imgur.com/AjGulv5.png" />
          <span>Gardening</span>
        </a>
      </div>
    </section>
    <section id="popular-product">
      <div className="product-heading">
        <h3>Popular Product</h3>
        <span>All</span>
      </div>
      <div className="product-container">
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/vUJ2JKU.png" />
          <strong>Apple</strong>
          <span className="quantity">1 KG</span>
          <span className="price">Rs. 100</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="chili" src="https://i.imgur.com/rFhSMZN.png" />
          <strong>Chili</strong>
          <span className="quantity">1 KG</span>
          <span className="price">Rs. 80</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/sGLggWL.jpg" />
          <strong>Onion</strong>
          <span className="quantity">1 KG</span>
          <span className="price">Rs. 50</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/WFjH6ui.png" />
          <strong>Potato</strong>
          <span className="quantity">1 KG</span>
          <span className="price">Rs. 60</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/XVLuy2J.png" />
          <strong>Garlic</strong>
          <span className="quantity">1 KG</span>
          <span className="price">Rs. 50</span>
          <a href="#" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/8l5hDhS.png" />
          <strong>Tomato</strong>
          <span className="quantity">1 KG</span>
          <span className="price">Rs. 80</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
      </div>
    </section>
    <section id="popular-bundle-pack">
      <div className="product-heading">
        <h3>Popular Bundle Pack</h3>
      </div>
      <div className="product-container">
        <div className="product-box">
          <img alt="pack" src="https://i.imgur.com/Zm8Xo2j.png" />
          <strong>Big Pack</strong>
          <span className="quantity">Lemon, Tomato, Potato,+4</span>
          <span className="price">Rs. 500</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/vMA9mRm.jpg" />
          <strong>Large Pack</strong>
          <span className="quantity">Lemon, Tomato, Potato,+2</span>
          <span className="price">Rs. 800</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/CeVqxe2.png" />
          <strong>Small Pack</strong>
          <span className="quantity">Lemon, Tomato, Potato</span>
          <span className="price">Rs. 300</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="pack" src="https://i.imgur.com/Zm8Xo2j.png" />
          <strong>Big Pack</strong>
          <span className="quantity">Lemon, Tomato, Potato,+4</span>
          <span className="price">Rs. 900</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/vMA9mRm.jpg" />
          <strong>Large Pack</strong>
          <span className="quantity">Lemon, Tomato, Potato,+2</span>
          <span className="price">Rs. 700</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="product-box">
          <img alt="apple" src="https://i.imgur.com/CeVqxe2.png" />
          <strong>Small Pack</strong>
          <span className="quantity">Lemon, Tomato, Potato</span>
          <span className="price">Rs. 400</span>
          <a href="Shopping Cart HTML.html" className="cart-btn">
            <i className="fas fa-shopping-bag" /> Add to Cart
          </a>
          <a className="like-btn">
            <i className="far fa-heart" />
          </a>
        </div>
      </div>
    </section>
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <a href="file:///C:/Users/RAGHAV/Desktop/Coding/Grocery/Logo.png">
            <span>M</span>MM
          </a>
          <div className="footer-social">
            <a>
              <i className="fab fa-facebook-f" />
            </a>
            <a>
              <i className="fab fa-twitter" />
            </a>
            <a>
              <i className="fab fa-instagram" />
            </a>
            <a>
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <strong>Product</strong>
          <ul>
            <li>
              <a href="#">Grocery</a>
            </li>
            <li>
              <a href="#">Packages</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <strong>Category</strong>
          <ul>
            <li>
              <a href="#">Beauty</a>
            </li>
            <li>
              <a href="#">Vegetables</a>
            </li>
            <li>
              <a href="#">Baby</a>
            </li>
            <li>
              <a href="#">Medicine</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <strong>Contact</strong>
          <ul>
            <li>
              <a href="#">Phone : +123456789</a>
            </li>
            <li>
              <a href="#">Email : mudikhanaminimarket@gmail.com</a>
            </li>
            <li>
              <a href="#">Cities we serve - Vadodara</a>
            </li>
          </ul>
          <p style={{ color: "aliceblue" }}>
            Copyright ©2022 | All Rights Reserved
          </p>
        </div>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </footer>
  </div> 
        }
    </div>
    

    )
}

export default Homepage;