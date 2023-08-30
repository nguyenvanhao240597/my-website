import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className="container">
            <div className={cx('container-img')}>
                <div className={cx('cont')}>
                    <img src={images.prev} alt={images.prev} />
                    <div className={cx('banner-text')}>
                        <h5>T-shirt / Tops</h5>
                        <h1>Summer Value Pack</h1>
                        <h4>cool / colorful / comfy</h4>
                        <b>
                            <button>Shop Now</button>
                        </b>
                    </div>
                    <img src={images.next} alt={images.next} />
                </div>
            </div>
        </div>
    );
}
export default Banner;
