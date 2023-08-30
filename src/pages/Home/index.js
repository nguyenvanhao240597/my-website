import Banner from './Banner';
import Deals from './Deals';
import NewArrival from './NewArrival';
import BigSavingZone from './BigSavingZone';
import FashionBetter from './FashionBetter';
import CategoriesForMen from './CategoriesForMen';
import CategoriesForWomen from './CategoriesForWomen';
import TopBrandsDeal from './TopBrandsDeal';
import InTheLimelight from './InTheLimelight';
import Feedback from './Feedback';
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
                    <FashionBetter />
                    <CategoriesForMen />
                    <CategoriesForWomen />
                    <TopBrandsDeal />
                    <InTheLimelight />
                    <Feedback />
                    <h2>Home page</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
