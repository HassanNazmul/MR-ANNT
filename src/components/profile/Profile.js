import React from 'react';
import styles from './ProfileStyle.module.css'
import {useHistory} from "react-router-dom";

import {FaFacebookSquare} from 'react-icons/all';
import abir from '../../img/abir.jpg'

function Profile() {

    const history = useHistory();

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
                            </div>
                        </div>
                    </div>


                    {/*    <div className={styles.cardOuter}>*/}
                    {/*        <div className={styles.cardContainer}>*/}
                    {/*            <div><img className={styles} src={abir} alt=""/></div>*/}
                    {/*            <div className={styles.title}>ABIR</div>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.fullName}>Fayed Abir</div>*/}
                    {/*        <div className={styles.iconDiv}>*/}
                    {/*            <a className={styles.icon}><FaFacebookSquare onClick={() => {*/}
                    {/*                history.push(window.location = 'https://www.facebook.com/fayedabir')*/}
                    {/*            }}/></a>*/}
                    {/*            <a className={styles.icon}><FaLinkedin onClick={() => {*/}
                    {/*                history.push(window.location = 'https://www.linkedin.com/in/fayed-abir-969916171')*/}
                    {/*            }}/></a>*/}
                    {/*            <a className={styles.icon}><HiOutlineMail onClick={() => {*/}
                    {/*                history.push(window.location = 'mailto:fayedabirf4@gmail.com')*/}
                    {/*            }}/></a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*/!* NUR *!/*/}
                    {/*<div className="col-lg-3 col-sm-6">*/}
                    {/*    <div className={styles.cardOuter}>*/}
                    {/*        <div className={styles.cardContainer}>*/}
                    {/*            <div><img className={styles} src={nur} alt=""/></div>*/}
                    {/*            <div className={styles.title}>NUR</div>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.fullName}>Nur Mohammed</div>*/}
                    {/*        <div className={styles.iconDiv}>*/}
                    {/*            <a className={styles.icon}><FaFacebookSquare onClick={() => {*/}
                    {/*                history.push(window.location = 'https://www.facebook.com/md.nurulhuda1')*/}
                    {/*            }}/></a>*/}
                    {/*            <a className={styles.icon}><FaLinkedin onClick={() => {*/}
                    {/*                history.push(window.location = '#')*/}
                    {/*            }}/></a>*/}
                    {/*            <a className={styles.icon}><HiOutlineMail onClick={() => {*/}
                    {/*                history.push(window.location = 'mailto:nurul.huda420.nh6@gmail.com')*/}
                    {/*            }}/></a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*/!* NAHID *!/*/}
                    {/*<div className="col-lg-3 col-sm-6">*/}
                    {/*    <div className={styles.cardOuter}>*/}
                    {/*        <div className={styles.cardContainer}>*/}
                    {/*            <div><img className={styles} src={nahid} alt=""/></div>*/}
                    {/*            <div className={styles.title}>NAHID</div>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.fullName}>Nazmul Hassan</div>*/}
                    {/*        <div className={styles.iconDiv}><a className={styles.icon}*/}
                    {/*        ><FaFacebookSquare onClick={() => {*/}
                    {/*            history.push(window.location = 'https://www.facebook.com/Nazmul.naaz96')*/}
                    {/*        }}/></a><a*/}
                    {/*            className={styles.icon}*/}
                    {/*        ><FaLinkedin onClick={() => {*/}
                    {/*            history.push(window.location = 'https://www.linkedin.com/in/nhassan96/')*/}
                    {/*        }}/></a><a*/}
                    {/*            className={styles.icon}><HiOutlineMail onClick={() => {*/}
                    {/*            history.push(window.location = 'mailto:nazmul.naaz96@gmail.com')*/}
                    {/*        }}/></a></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*/!* TORU *!/*/}
                    {/*<div className="col-lg-3 col-sm-6">*/}
                    {/*    <div className={styles.cardOuter}>*/}
                    {/*        <div className={styles.cardContainer}>*/}
                    {/*            <div><img className={styles} src={toru} alt=""/></div>*/}
                    {/*            <div className={styles.title}>TORU</div>*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.fullName}>Jubaer Ahmed</div>*/}
                    {/*        <div className={styles.iconDiv}><a className={styles.icon}*/}
                    {/*        ><FaFacebookSquare onClick={() => {*/}
                    {/*            history.push(window.location = 'https://www.facebook.com/toru.jat')*/}
                    {/*        }}/></a><a*/}
                    {/*            className={styles.icon}*/}
                    {/*        ><FaLinkedin onClick={() => {*/}
                    {/*            history.push(window.location = 'https://www.linkedin.com/in/jubaer-ahmed-7684a8157')*/}
                    {/*        }}/></a><a*/}
                    {/*            className={styles.icon}><HiOutlineMail onClick={() => {*/}
                    {/*            history.push(window.location = 'mailto:torujat@gmail.com')*/}
                    {/*        }}/></a></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;