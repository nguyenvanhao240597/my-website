import classNames from 'classnames/bind';
import styles from './Deals.module.scss';
// import images from '~/assets/images';

const cx = classNames.bind(styles);

function Deals() {
    return (
        <div className={cx('container-deals')}>
            <div className={cx('deals-left')}>
                <div className={cx('text-deals')}>
                    <h6>Low Price</h6>
                    <h2>High Coziness</h2>
                    <h3>UPTO 50% OFF</h3>
                    <h6 className={cx('text-h6')}>Explore Items</h6>
                </div>
            </div>
            <div className={cx('deals-right')}>
                <div className={cx('text-deals')}>
                    <h6>Beyoung Presents</h6>
                    <h2>Breezy Summer Style</h2>
                    <h3>UPTO 50% OFF</h3>
                    <h6 className={cx('text-h6')}>Explore Items</h6>
                </div>
            </div>
        </div>
    );
}
export default Deals;
