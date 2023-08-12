import React from 'react';
import Logo from './images/logo.svg'




function Header(){
    return(
        <div>
        <header >
            <nav className="nav_all">
                <img src={Logo} width="100px"  />
               <ul className="ul_nav">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
               </ul>
            </nav>
           <h1>Reason I'm excited to <span className="nowrap">learn React</span> </h1> 
        </header>
        </div>
    );
};



 export default Header;

 

