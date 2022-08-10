import Navbar from "./Components/Navbar";
import React,{Fragment} from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import SignUp from "./Components/Pages/SignUp";
import Services from "./Components/Pages/Services";

function App() {
  return (
    <div className="App">
    
    <Router>
      <Navbar />
      <Home /> 
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
