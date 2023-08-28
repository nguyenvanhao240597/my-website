import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('taskbaar')}>
            <div className={cx('frame510')}>
                <img src={images.logo} alt={images.logo} className={cx('logo')} />
                <div className={cx('details')}>
                    <ul className={cx('xxx')}>
                        <li>Shop</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Combos</li>
                        <li>Joggers</li>
                    </ul>
                </div>
                <div className={cx('search')}>
                    <input className={cx('search-btn')}></input>
                </div>
                <div className={cx('frame389')}></div>
            </div>
        </div>
    );
}

export default Header;
