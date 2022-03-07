import './style.scss';
import SubmitButton from "../common/submitButton";
import { MdAdd, MdDownload, MdEdit, MdShoppingCart } from "react-icons/md";

function Buttons(props) {
    return (
        <div  className="buttons" >
            <div className="buttons__title">Buttons</div> <br />
            <SubmitButton />
            <button className="button">click</button>
            <button className="button-outline" >submit</button>
            <button className="button-rounded">click here</button>
            <button className="button-icon" > < MdEdit />  Edit</button>
            <button className="button-download" > 
                <span className="button-download__icon" >< MdDownload /></span> 
                <span className="button-download__text">Download</span>
            </button>
            <button className="button-floating" >< MdAdd /></button>
            <button className="button-slanted" >
                <span className="button-slanted__slant"> Buy </span>
                <span className="button-slanted__icon">< MdShoppingCart /></span>
            </button>
            
        </div>
    );
}

export default Buttons;