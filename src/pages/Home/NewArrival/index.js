import classNames from 'classnames/bind';
import styles from './NewArrival.module.scss';
import images1 from '~/images/photographer-white-background.png';
import images2 from '~/images/Rectangle 28.png';
import images3 from '~/images/Rectangle 28-1.png';
import images4 from '~/images/Rectangle 28-2.png';
import images from '~/assets/images';

// import images from '~/assets/images';

const cx = classNames.bind(styles);

function NewArrival() {
    return (
        <div className={cx('container-NewArrival')}>
            <div className={cx('text-NewArrival')}>
                <div className={cx('symbol')}></div>
                <p>New Arrival</p>
            </div>
            <div className={cx('NewArrival')}>
                <div className={cx('frame139')}>
                    <img src={images.prevNewArrival} alt={images.prevNewArrival} className={cx('control')} />
                    <div className={cx('box-NewArrival')}>
                        <img src={images1} alt={images1} className={cx('image')} />
                        <p className={cx('text')}>Knitted Joggers</p>
                    </div>
                    <div className={cx('box-NewArrival')}>
                        <img src={images2} alt={images2} className={cx('image')} />
                        <p className={cx('text')}>Knitted Joggers</p>
                    </div>
                    <div className={cx('box-NewArrival')}>
                        <img src={images3} alt={images3} className={cx('image')} />
                        <p className={cx('text')}>Knitted Joggers</p>
                    </div>
                    <div className={cx('box-NewArrival')}>
                        <img src={images4} alt={images4} className={cx('image')} />
                        <p className={cx('text')}>Knitted Joggers</p>
                    </div>
                    <img src={images.nextNewArrival} alt={images.nextNewArrival} className={cx('control')} />
                </div>
            </div>
        </div>
    );
}
export default NewArrival;
