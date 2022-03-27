import "./style.scss";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useState } from "react";
function Card(props) {
    const [like, setLike]=useState(false)
    return (
        <div className="card">
            <img className="card__image" src="https://i.pinimg.com/originals/95/97/80/959780813948c985959b886d9787d3ac.jpg" alt="" />
            <div className="card_col" >
                <h3>cute baby boy</h3>
                <p className="card__text" > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ut impedit! Adipisci aperiam labore iure corrupti ea dicta quo quaerat quidem officia minima, molestias architecto magnam, obcaecati ipsum qui libero?</p>
                <span className="card__footer">
                    <span>{ like ?  "unlike" : "like"}</span>
                    <span onClick={()=>setLike(!like)} className="card__footer-icon">
                        { like ? <  MdFavorite  /> : <  MdFavoriteBorder />}
                   </span>
                </span>
            </div>
        </div>
    );
}

export default Card;