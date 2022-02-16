import "./style.scss";
import logo from "../assets/profile.svg";
import { BsListNested } from "react-icons/bs";
import { MdClose, MdHome, MdPerson, MdPersonAdd } from "react-icons/md";
import { useState } from "react";
import Component  from "./components";

function DashBoard(props) {
    const [menu,setMenu]=useState(false)
    const [component,setComponent]=useState('home')
    const handleMenu=()=>{
        var nav=document.getElementById("nav");
        nav.style.display=nav.style.display !== "block" ? "block" :"none";
       setMenu(!menu);
    }

    const changeComponent=(comp)=> setComponent(comp);

    return (
        <div className="dash">
            <div className="dash__header" >
                <img src={logo} className="dash__header-logo" alt='' />
                <div className="dash__header-title" >REACT DESIGNS</div>
                <div><div className="dash__header-nav" onClick={handleMenu} > { menu ?  <MdClose /> : < BsListNested />  } </div> </div>
            </div>
            <div className="dash__body" >
                <div className="dash__body-nav" id="nav">
                    <a href="#!" className="nav-item" onClick={()=>changeComponent("Home")} > < MdHome /> Dashboard </a>
                    <a href="#!" className="nav-item"  onClick={()=>changeComponent("register")} > < MdPersonAdd /> Register </a>
                    <a href="#!" className="nav-item"  onClick={()=>changeComponent("login")} > < MdPerson /> Login </a>
                </div>

                <div className="dash__body-container" >
                    < Component name={component} />
                </div>

            </div>
        </div>
    );
}

export default DashBoard;