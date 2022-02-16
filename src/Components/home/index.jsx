import { MdGroup, MdAccountBox,MdDashboard,MdShoppingBasket,MdBusiness,MdAddLink } from 'react-icons/md';
import HomeCard from '../common/homeCard';
import './style.scss';

function Home(props) {
    return (
        <div className="home">
            < HomeCard  icon={< MdGroup />} title="users" text="100k+" />
            < HomeCard  icon={< MdAccountBox />} title="contacts" text="70k+" />
            < HomeCard  icon={< MdDashboard />} title="dash baords" text="100k+" />
            < HomeCard  icon={< MdShoppingBasket />} title="shoppings" text="50k+" />
            < HomeCard  icon={< MdBusiness />} title="city blocks" text="100k+" />
            < HomeCard  icon={< MdAddLink />} title="links" text="500k+" />
            
        </div>
    );
}

export default Home;