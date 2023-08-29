import Banner from './Banner';
import Deals from './Deals';
import NewArrival from './NewArrival';
// import Test from './Test';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="container">
            <Banner />
            <Deals />
            <NewArrival />
            <h2>Home page</h2>
        </div>
    );
}

export default Home;
