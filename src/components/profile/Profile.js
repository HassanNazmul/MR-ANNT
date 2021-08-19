import React from 'react';
import styles from './ProfileStyle.module.css'

import {FaFacebookSquare, FaLinkedin, HiOutlineMail} from 'react-icons/all';

import nahid from '../../img/nahid.jpg'
import toru from '../../img/toru.jpg'
import abir from '../../img/abir.jpg'
import nur from '../../img/nur.jpg'

function Profile(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-3 col-sm-6">

                        {/* ABIR */}
                        <div className={styles.cardOuter}>
                            <div className={styles.cardContainer}>
                                <div><img className={styles} src={abir} alt=""/></div>
                                <div className={styles.title}>ABIR</div>
                            </div>
                            <div className={styles.fullName}>Fayed Abir</div>
                            <div className={styles.iconDiv}><a className={styles.icon}
                                                               href="https://www.facebook.com/fayedabir"><FaFacebookSquare/></a><a
                                className={styles.icon}
                                href="https://www.linkedin.com/in/fayed-abir-969916171"><FaLinkedin/></a><a
                                className={styles.icon} href="mailto:fayedabirf4@gmail.com"><HiOutlineMail/></a></div>
                        </div>
                    </div>

                    {/* NUR */}
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.cardOuter}>
                            <div className={styles.cardContainer}>
                                <div><img className={styles} src={nur} alt=""/></div>
                                <div className={styles.title}>NUR</div>
                            </div>
                            <div className={styles.fullName}>Nur Mohammed</div>
                            <div className={styles.iconDiv}><a className={styles.icon}
                                                               href="https://www.facebook.com/md.nurulhuda1"><FaFacebookSquare/></a><a
                                className={styles.icon}
                                href="#"><FaLinkedin/></a><a
                                className={styles.icon} href="mailto:nurul.huda420.nh6@gmail.com"><HiOutlineMail/></a>
                            </div>
                        </div>
                    </div>

                    {/* NAHID */}
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.cardOuter}>
                            <div className={styles.cardContainer}>
                                <div><img className={styles} src={nahid} alt=""/></div>
                                <div className={styles.title}>NAHID</div>
                            </div>
                            <div className={styles.fullName}>Nazmul Hassan</div>
                            <div className={styles.iconDiv}><a className={styles.icon}
                                                               href="https://www.facebook.com/Nazmul.naaz96"><FaFacebookSquare/></a><a
                                className={styles.icon}
                                href="https://www.linkedin.com/in/nhassan96/"><FaLinkedin/></a><a
                                className={styles.icon} href="mailto:nazmul.naaz96@gmail.com"><HiOutlineMail/></a></div>
                        </div>
                    </div>

                    {/* TORU */}
                    <div className="col-lg-3 col-sm-6">
                        <div className={styles.cardOuter}>
                            <div className={styles.cardContainer}>
                                <div><img className={styles} src={toru} alt=""/></div>
                                <div className={styles.title}>TORU</div>
                            </div>
                            <div className={styles.fullName}>Jubaer Ahmed</div>
                            <div className={styles.iconDiv}><a className={styles.icon}
                                                               href="https://www.facebook.com/toru.jat"><FaFacebookSquare/></a><a
                                className={styles.icon}
                                href="https://www.linkedin.com/in/jubaer-ahmed-7684a8157"><FaLinkedin/></a><a
                                className={styles.icon} href="mailto:torujat@gmail.com"><HiOutlineMail/></a></div>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;