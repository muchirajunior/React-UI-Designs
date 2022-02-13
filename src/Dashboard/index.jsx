import "./style.scss";
import logo from "../assets/profile.svg";
import { BsListNested } from "react-icons/bs";
import { MdClose, MdHome, MdPersonAdd } from "react-icons/md";
import { useState } from "react";

function DashBoard(props) {
    const [menu,setMenu]=useState(false)
    const handleMenu=()=>{
        var nav=document.getElementById("nav");
        nav.style.display=nav.style.display !== "block" ? "block" :"none";
       setMenu(!menu);
    }
    return (
        <div className="dash">
            <div className="dash__header" >
                <img src={logo} className="dash__header-logo" alt='' />
                <div className="dash__header-title" >MUCHIRA JUNIOR REACT DESIGNS</div>
                <div><div className="dash__header-nav" onClick={handleMenu} > { menu ?  <MdClose /> : < BsListNested />  } </div> </div>
            </div>
            <div className="dash__body" >
                <div className="dash__body-nav" id="nav">
                    <a href="#home" className="nav-item"> < MdHome /> Home </a>
                    <a href="#x" className="nav-item"> < MdPersonAdd /> Login </a>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;