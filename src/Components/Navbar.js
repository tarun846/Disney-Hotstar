import React from 'react';
import { Link } from 'react-router-dom';
import Ham from "../Assets/disney-hotstar-logo-dark.svg";
import Kids from "../Assets/kids.svg";
function Navbar() {
    return (
        <div  className = 'Navbar' >
            <header>
            <div className = 'nav_left'>
                <div className = 'Navbar_img'> 
                <span></span>
                <span></span>
                <span></span>
                 </div>
                 <div className ='logo' >
                 <Link to = '/' >
                 <img src = {Ham} />
                    </Link>
               
                 </div>
                 <div className ='Nav_links' >
                   <ul>
                   <li> 
                    
                   <Link to = '/Tv' >
                    Tv
                    </Link>
                    
                     </li>
                   <li> 
                   <Link to = '/Movie' >
                    Movie
                    </Link>
                     </li>
                   <li> Sports </li>
                   <li> Disney + </li>
                    <li> 
                    <img src ={Kids} />    
                     </li>
                    </ul> 

                 </div>
                 </div>
                 <div className ='Nav_right' >
                {/* <div></div> */}
                 <button> SUBSCRIBE  </button>
                 <div className = 'links' > 
                <a href = 'sahi.com' >  LOGIN </a>
                 </div>
                 </div>
            </header>
        </div>
    )
}

export default Navbar
