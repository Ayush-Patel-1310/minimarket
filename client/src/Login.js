import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from  'react-router-dom';
import './Login.css';


const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const [lemail, setLemail] = useState('');
    const [lpassword, setLpassword] = useState('');
    const [lmessage, setLmessage] = useState('');
    const handleSlide = () => {
        var a, b, c, d;
        a = document.getElementById("one");
        b = document.getElementById("two");
        c = document.getElementById("three");
        d = document.getElementById("four");
        d.classList.add("mover");
        a.classList.add("hide");
        a.classList.remove("show");
        c.classList.add("movel2");
        b.classList.add("hide");
        b.classList.remove("show");
        c.classList.remove("hide");
        c.classList.add("show");
        d.classList.remove("hide");
        d.classList.add("show");
    }
    const handleSwipe = () => {
        var a, b, c, d;
        a = document.getElementById("one");
        b = document.getElementById("two");
        c = document.getElementById("three");
        d = document.getElementById("four");
        b.classList.add("mover2");
        c.classList.add("hide");
        c.classList.remove("show");
        a.classList.add("movel");
        d.classList.add("hide");
        d.classList.remove("show");
        b.classList.remove("hide");
        b.classList.add("show");
        a.classList.remove("hide");
        a.classList.add("show");
    }

    const handleSubmitl = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login', {
                lemail,
                lpassword
            });
            setLmessage(response.data);
            sessionStorage.setItem("user",lemail);
            navigate(`/`);
        } catch (error) {
            console.error('Error logging in:', error);
            setLmessage('Error logging in. Please try again.');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/signup', {
                name,
                email,
                password
            });
            setMessage(response.data);
            sessionStorage.setItem("user",email);
            navigate(`/`);
        } catch (error) {
            console.error('Error signing up:', error);
            setMessage('Error signing up. Please try again.');
        }
    };

    return (
        <div>
            {/* <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            {message && <p>{message}</p>}


            <h2>Login</h2>
            <form onSubmit={handleSubmitl}>
                <input
                    type="email"
                    placeholder="Email"
                    value={lemail}
                    onChange={(e) => setLemail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={lpassword}
                    onChange={(e) => setLpassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {lmessage && <p>{lmessage}</p>} */}
            <section className="imp">
  <section>
    <div className="login show" id="one">
      <div className="textbox slide-left2">
        <div className="head">
          <h1>Sign In to CGS</h1>
          <ul>
            <li>
              <i className="fab fa-facebook-f" style={{ cursor: "pointer" }} />
            </li>
            <li>
              <i
                className="fab fa-google-plus-g"
                style={{ cursor: "pointer" }}
              />
            </li>
            <li>
              <i className="fab fa-linkedin-in" style={{ cursor: "pointer" }} />
            </li>
          </ul>
          <h3 style={{ cursor: "pointer" }}>or use your E-mail ID</h3>
        </div>
        {lmessage && <p>{lmessage}</p>}
        <form onSubmit={handleSubmitl} action="">
          <input type="text" placeholder="EMAIL" value={lemail} onChange={(e) => setLemail(e.target.value)} required="" />
          <input type="password" placeholder="PASSWORD" value={lpassword} onChange={(e) => setLpassword(e.target.value)} required="" />
          <button id="b">
            <a href="#" style={{ cursor: "pointer" }}>
              Forgot password?
            </a>
          </button>
          <button type="submit" className="sign_in_btn">
            <a style={{ color: "white" }}>
              SIGN IN
            </a>
          </button>
        </form>
      </div>
    </div>
    <div className="sec show" id="two">
      <div className="textbox slide-left">
        <h1>Not a member?</h1>
        <p>Sign up and start shopping.</p>
        <button
          id="b1"
          style={{ cursor: "pointer" }}
          className="prompt_sign_up"
          onClick={() => {handleSlide()}}
        >
          SIGN UP
        </button>
      </div>
    </div>
  </section>
  <section>
    <div className="sec hide" id="three">
      <div className="textbox slide-left">
        <h1>Already a member?</h1>
        <p>Login to keep shopping.</p>
        <button
          id="b2"
          style={{ cursor: "pointer" }}
          className="prompt_sign_in"
          onClick={() => {handleSwipe()}}
        >
          SIGN IN
        </button>
      </div>
    </div>
    <div className="login hide" id="four">
      <div className="textbox slide-right">
        <div className="head">
          <h1>Create Account</h1>
          <ul>
            <li>
              <i className="fab fa-facebook-f" style={{ cursor: "pointer" }} />
            </li>
            <li>
              <i
                className="fab fa-google-plus-g"
                style={{ cursor: "pointer" }}
              />
            </li>
            <li>
              <i className="fab fa-linkedin-in" style={{ cursor: "pointer" }} />
            </li>
          </ul>
          <h3 style={{ cursor: "pointer" }}>or use your E-mail ID</h3>
        </div>
        {message && <p>{message}</p>}
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="NAME" value={name} onChange={(e) => setName(e.target.value)} required="" />
          <br />
          <input type="text" placeholder="EMAIL" value={email} onChange={(e) => setEmail(e.target.value)} required="" />
          <br />
          <input type="password" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} required="" />
          <br />
          <input type="text" placeholder="PHONE NO. (optional)" />
          <br />
          <button
            type="submit"
            style={{ cursor: "pointer" }}
            className="sign_up_btn"
          >
            <a
              style={{ color: "white", textDecoration: "none" }}
            >
              SIGN UP
            </a>
          </button>
        </form>
      </div>
    </div>
  </section>
</section>
        </div>
    );
}

export default Login;


