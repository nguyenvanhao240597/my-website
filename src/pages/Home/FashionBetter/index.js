import classNames from 'classnames/bind';
import styles from './FashionBetter.module.scss';
import images1 from '~/images/fastionBetter1.png';
import images2 from '~/images/fastionBetter2.png';

// import images from '~/assets/images';

const cx = classNames.bind(styles);

function FashionBetter() {
    return (
        <div className={cx('container-FashionBetter')}>
            <div className={cx('FashionBetter-img-text')}>
                <img src={images1} alt={images1} />
                <div className={cx('text')}>
                    <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
                    <h4>
                        In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable
                        & Affordable fashion 24/7
                    </h4>
                    <button>Shop Now</button>
                </div>
            </div>

            <img src={images2} alt={images2} />
        </div>
    );
}
export default FashionBetter;
