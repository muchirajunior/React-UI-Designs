import "./style.scss";
import logo from "../assets/profile.svg";
import { BsListNested } from "react-icons/bs";
import { MdCardGiftcard, MdClose, MdDashboard, MdInput, MdPerson, MdPushPin, MdRotateRight } from "react-icons/md";
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
                    <a href="#!" className="nav-item" onClick={()=>changeComponent("Home")} > < MdDashboard color="green" /> Dashboard </a>
                    <a href="#!" className="nav-item"  onClick={()=>changeComponent("inputs")} > < MdInput color="red" /> Text Inputs </a>
                    <a href="#!" className="nav-item"  onClick={()=>changeComponent("login")} > < MdPerson color="yellow" /> Login </a>
                    <a href="#!" className="nav-item"  onClick={()=>changeComponent("spinners")} > < MdRotateRight color="grey" /> spinners </a>
                    <a href="#!" className="nav-item"  onClick={()=>changeComponent("buttons")} > < MdPushPin color="white" /> buttons </a>
                    <a href="#!" className="nav-item"  onClick={()=>changeComponent("card")} > < MdCardGiftcard color="orange" /> cards </a>
                </div>

                <div className="dash__body-container" >
                    < Component name={component} />
                </div>

            </div>
        </div>
    );
}

export default DashBoard;