import classNames from 'classnames/bind';
import styles from './CategoriesForWomen.module.scss';

// import images from '~/assets/images';

const cx = classNames.bind(styles);

function CategoriesForWomen() {
    return (
        <div className={cx('container-CategoriesForWomen')}>
            <div className={cx('CategoriesForWomen-img-text')}>
                <div className={cx('text')}>
                    <h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
                    <h4>
                        In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable
                        & Affordable fashion 24/7
                    </h4>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    );
}
export default CategoriesForWomen;
