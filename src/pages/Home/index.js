import Banner from './Banner';
import Deals from './Deals';
import NewArrival from './NewArrival';
import BigSavingZone from './BigSavingZone';
// import Test from './Test';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="container">
            <div className={cx('center')}>
                <Banner />
                <div className={cx('home')}>
                    <Deals />
                    <NewArrival />
                    <BigSavingZone />
                    <h2>Home page</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
