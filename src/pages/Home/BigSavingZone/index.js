import classNames from 'classnames/bind';
import styles from './BigSavingZone.module.scss';
import images1 from '~/images/HawaiianShirts.png';
import images2 from '~/images/PrintedT-Shirt.png';
import images3 from '~/images/CargoJoggers.png';
import images4 from '~/images/UrbanShirts.png';
import images5 from '~/images/OversizedT-Shirts.png';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function BigSavingZone() {
    return (
        <div className={cx('container-BigSavingZone')}>
            <div className={cx('text-BigSavingZone')}>
                <div className={cx('symbol')}></div>
                <p>Big Saving Zone</p>
            </div>
            <div className={cx('BigSavingZone-big')}>
                <div className={cx('BigSavingZone-up')}>
                    <div className={cx('box-BigSavingZone1')}>
                        <img src={images1} alt={images1} className={cx('image1')} />
                        <div className={cx('fromat-text1')}>
                            <h2>Hawaiian Shirts</h2>
                            <p>Dress up in summer vibe</p>
                            <h3>UPTO 50% OFF</h3>
                            <img src={images.downWhite} alt={images.downWhite} />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className={cx('box-BigSavingZone2')}>
                        <img src={images2} alt={images2} className={cx('image2')} />
                        <div className={cx('fromat-text2')}>
                            <button className={cx('button-limited')}>Limited Stock</button>
                            <h2>
                                Printed <br />
                                T-Shirt
                            </h2>
                            <p>New Designs Every Week</p>
                            <h3>UPTO 40% OFF</h3>
                            <img src={images.downWhite} alt={images.downWhite} />
                            <button className={cx('button-white')}>SHOP NOW</button>
                        </div>
                    </div>
                    <div className={cx('box-BigSavingZone3')}>
                        <img src={images3} alt={images3} className={cx('image3')} />
                        <div className={cx('fromat-text3')}>
                            <h2>Cargo Joggers</h2>
                            <p>Move with style & comfort</p>
                            <h3>UPTO 50% OFF</h3>
                            <img src={images.downBlack} alt={images.downBlack} />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <div className={cx('BigSavingZone-down')}>
                    <div className={cx('box-BigSavingZone4')}>
                        <img src={images4} alt={images4} className={cx('image4')} />
                        <div className={cx('fromat-text4')}>
                            <h2>Urban Shirts</h2>
                            <p>Live In Confort</p>
                            <h3>FLAT 60% OFF</h3>
                            <img src={images.downBlack} alt={images.downBlack} />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                    <div className={cx('box-BigSavingZone5')}>
                        <img src={images5} alt={images5} className={cx('image5')} />
                        <div className={cx('fromat-text5')}>
                            <h2>Oversized T-Shirts</h2>
                            <p>Street Style Icon</p>
                            <h3>FLAT 60% OFF</h3>
                            <img src={images.downBlack} alt={images.downBlack} />
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BigSavingZone;
