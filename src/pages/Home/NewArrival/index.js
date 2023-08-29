import classNames from 'classnames/bind';
import styles from './NewArrival.module.scss';
import images1 from '~/images/photographer-white-background.png';
import images2 from '~/images/Rectangle 28.png';
import images3 from '~/images/Rectangle 28-1.png';
import images4 from '~/images/Rectangle 28-2.png';

// import images from '~/assets/images';

const cx = classNames.bind(styles);

function NewArrival() {
    return (
        <div className={cx('container')}>
            <div className={cx('text-NewArrival')}>
                <div className={cx('symbol')}></div>
                <p>New Arrival</p>
            </div>
            <div className={cx('NewArrival')}>
                <div className={cx('frame139')}>
                    <div className={cx('box-NewArrival')}>
                        <img src={images1} alt={images1} />
                        <p className={cx('text')}>Knitted Joggers</p>
                    </div>
                    <div className={cx('box-NewArrival')}>
                        <img src={images2} alt={images2} />
                        <p className={cx('text')}>Knitted Joggers</p>
                    </div>
                    <div className={cx('box-NewArrival')}>
                        <img src={images3} alt={images3} />
                        <p className={cx('text')}>Knitted Joggers</p>
                    </div>
                    <div className={cx('box-NewArrival')}>
                        <img src={images4} alt={images4} />
                        <p className={cx('text')}>Knitted Joggers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewArrival;
