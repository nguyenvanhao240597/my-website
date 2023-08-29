import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className="container">
            <div className={cx('container-magin-height')}>
                <div className={cx('taskbaar')}>
                    <div className={cx('frame510')}>
                        <img src={images.logo} alt={images.logo} className={cx('logo')} />
                        <div className={cx('details')}>
                            <ul className={cx('horizontal-list')}>
                                <b>
                                    <li>
                                        <a href="/search">Shop</a>
                                    </li>
                                </b>
                                <li>
                                    <a href="/search">Men</a>
                                </li>
                                <li>
                                    <a href="/search">Women</a>
                                </li>
                                <li>
                                    <a href="/search">Combos</a>
                                </li>
                                <li>
                                    <a href="/search">Joggers</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('search')}>
                            <img src={images.search} alt={images.search} className={cx('search-img')} />
                            <input className={cx('search-input')} placeholder="Search" spellCheck={false}></input>
                        </div>
                        <div className={cx('frame389')}>
                            <div className={cx('component1')}>
                                <button className={cx('heart')}>
                                    <img src={images.heart} alt={images.heart} className={cx('heart-img')} />
                                </button>
                            </div>
                            <div className={cx('component2')}>
                                <button className={cx('user')}>
                                    <img src={images.user} alt={images.user} className={cx('user-img')} />
                                </button>
                            </div>
                            <div className={cx('component3')}>
                                <button className={cx('shopping')}>
                                    <img src={images.shopping} alt={images.shopping} className={cx('shopping-img')} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
