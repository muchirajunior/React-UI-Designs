import './styles.scss';

function HomeCard({icon, title,text}) {
    return (
        <div className="home-card">
            <div className="home-card__header" >
                <span className="home-card__icon">{icon}</span>
                <span className="home-card__title">{title}</span>
            </div>
            <p className="home-card__text">{text}</p>
            
        </div>
    );
}

export default HomeCard;