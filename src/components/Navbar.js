import React from 'react'; 
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
     
      <Link to="/">Home</Link><br />
      <Link to="/favorite">favorite</Link><br />
    </nav>
    );
}

export default Navbar;
