import React from 'react'
import {NavLink} from 'react-router-dom';
import './sidebar.css'
import circle from '../../Assets/circle2.jpg';

const SideBar = () => {
    return (
        <div className="navigation shadow-lg">
             
           
            <nav className="nav ">  
               {/*  <NavLink className="nav-brand" to='/'>BrandName</NavLink> */}
               
                    <div className=" d-flex  flex-column">
                        <NavLink class="navbar-brand d-flex justify-content-center" to="/">
                            <img src={circle} alt="" className="logo"/>
                        </NavLink>

                        <NavLink className="nav-link nav-item  mb-1" 
                            activeClassName="active" exact
                            to='/home'>
                            <i className='bx bx-user nav_icon d-flex justify-content-center'></i> 
                            <span className="nav_name d-flex justify-content-center">Students</span> 
                        </NavLink>
                       
                        <NavLink className="nav-link nav-item mb-1"
                            activeClassName="active" exact
                            to='/lessons'>
                              
                              <i className="bx bx-book nav_icon d-flex justify-content-center"></i>
                                <span className="nav_name d-flex justify-content-center">Lesson Plan</span>
                        </NavLink>

                        <NavLink className="nav-link nav-item mb-1"
                            activeClassName="active" exact
                            to='/settings'>
                                <i className="bi bi-gear nav_icon d-flex justify-content-center"></i>
                                <span className="nav_name d-flex justify-content-center">Settings</span>
                        </NavLink>
                   
                    
                       
                
                    </div>          
            </nav>
        </div>
    )
}

export default SideBar
