import React from 'react';
import styles from './ProfileStyle.module.css'

import {FaFacebookSquare, FaLinkedin, HiOutlineMail} from 'react-icons/all';
import abir from '../../img/abir.jpg'
import nur from '../../img/nur.jpg'
import nahid from '../../img/nahid.jpg'
import toru from '../../img/toru.jpg'


function Profile() {

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
                            <div className={styles.iconDiv}>
                                <a href="https://www.facebook.com/fayedabir" className={styles.icon}><FaFacebookSquare/></a>
                                <a href="https://www.linkedin.com/in/fayed-abir-969916171" className={styles.icon}
                                ><FaLinkedin/></a>
                                <a href="mailto:fayedabirf4@gmail.com" className={styles.icon}><HiOutlineMail/></a>
                            </div>
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
                            <div className={styles.iconDiv}><a href="https://www.facebook.com/md.nurulhuda1"
                                                               className={styles.icon}
                            ><FaFacebookSquare/></a><a href="/"
                                                       className={styles.icon}
                            ><FaLinkedin/></a><a href="mailto:nurul.huda420.nh6@gmail.com"
                                                 className={styles.icon}><HiOutlineMail/></a>
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
                            <div className={styles.iconDiv}><a href="https://www.facebook.com/Nazmul.naaz96"
                                                               className={styles.icon}
                            ><FaFacebookSquare/></a><a href="https://www.linkedin.com/in/nhassan96/"
                                                       className={styles.icon}
                            ><FaLinkedin/></a><a href="mailto:nazmul.naaz96@gmail.com"
                                                 className={styles.icon}><HiOutlineMail/></a></div>
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
                            <div className={styles.iconDiv}><a href="https://www.facebook.com/toru.jat"
                                                               className={styles.icon}
                            ><FaFacebookSquare/></a><a href="https://www.linkedin.com/in/jubaer-ahmed-7684a8157"
                                                       className={styles.icon}
                            ><FaLinkedin/></a><a href="mailto:torujat@gmail.com"
                                                 className={styles.icon}><HiOutlineMail/></a></div>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;