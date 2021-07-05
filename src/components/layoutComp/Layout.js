import React from 'react'
import SideBar from '../sidebarComp/SideBar'
import './layout.css'

export const Layout = (props) => {
    return (
        <div className="main_layout">
            <SideBar />
            <div className="container header_container">

            </div>
            <div className="container custome_container">
                {props.children}
            </div>   
        </div>
    )
}

