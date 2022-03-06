import  './style.scss';

function Spinners(props) {
    return (
        <div className="spinners">
            <span className="spinners__title" >SPINNERS</span>
            
            <div className='loader'></div>
            <br /><br />
            <div className="loader2" ></div>
            <br /><br />
            <div className="loader3" ></div>
            
        </div>
    );
}

export default Spinners;