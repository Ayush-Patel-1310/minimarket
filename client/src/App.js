import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from  'react-router-dom';
import Login from "./Login";


function App() {
  const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
        // Send request to backend when input changes
        fetchResults(inputValue);
    };

    const fetchResults = async (searchTerm) => {
        try {
            const response = await axios.get(`/search?q=${searchTerm}`);
            console.log(response.data);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

  return (
    <div>
      {(sessionStorage.getItem("user")==null)?
        <Login />: 
        <div className="App">
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
                <a onClick={() => { navigate('/') }} className="active">
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
                (sessionStorage.getItem("user") === null) ?
                  <div>
                    <li>
                      <a onClick={() => { navigate('/Login') }}>Sign&nbsp;up</a>
                    </li>
                    <li>
                      <a onClick={() => { navigate('/Login') }}>Login</a>
                    </li>
                  </div> :
                  <li>
                    <a>{sessionStorage.getItem("user")}</a>
                  </li>
              }
            </ul>
            <div className="right-nav">
              <a className="like">
                <i className="fas fa-heart" />
                <span>2</span>
              </a>
              <a className="cart">
                <i className="fas fa-shopping-cart" />
                <span>2</span>
              </a>
              <a className="user-profile">
                <i className="fas fa-user" />
                <span>1</span>
              </a>
            </div>
          </nav>
          <input type="text" className='search_data' placeholder='Search What You Want' onChange={handleInputChange} />
          <div id="popular-product_1">
            {results.map((product) => (
              <div className="product-box product_box_1">
                <img alt="chili" src={product.image} />
                <strong>{product.product_name}</strong>
                <span className="quantity">1 UNIT / KG</span>
                <span className="price">Rs. {product.price}</span>
                <a href="Shopping Cart HTML.html" className="cart-btn">
                  <i className="fas fa-shopping-bag" /> Add to Cart
                </a>
                <a className="like-btn">
                  <i className="far fa-heart" />
                </a>
              </div>
            ))}
          </div>

        </div>
      }
    </div>

    
  );
}

export default App;
