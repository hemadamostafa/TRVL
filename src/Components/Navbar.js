import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
const NavBar = () => {

  const [click,setClick] = useState(false);
  const [button,setButton] = useState(true);
  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(()=>{
    showButton();
  },[])

  window.addEventListener("resize",showButton);

  const closeMobileMenu = ()=>{
    setClick(false);
  }
  const handelClick = () => {
    setClick(!click);
  }
  return (
    <>
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={()=>{closeMobileMenu()}} >
                    TRVL <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handelClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu" : "nav-menu active"}>
                  <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>sign Up</Link>
                  </li>
                </ul>
                {button && <Button buttonStyle="btn-outline">SIGN UP</Button>}
            </div>
        </nav>
    </>
  )
}

export default NavBar

/*
added 3 packages, and audited 1447 packages in 22s

203 packages are looking for funding
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
*/