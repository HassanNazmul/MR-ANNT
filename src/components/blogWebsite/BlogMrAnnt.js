import React from 'react';
import styles from "../blogWebsite/BlogMrAnntStyle.module.css";
import {FaBlogger, FaFacebookSquare} from "react-icons/all";

function BlogMrAnnt() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-6 gx-5">
                        <div className={styles.cardOuter}>
                            <div className={styles.iconDiv}>
                                <h1 className={styles.h1}><FaBlogger/><a className={styles.socialTitle}
                                                                         href="https://blog.mrannt.com/">BLOG</a></h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 gx-5">
                        <div className={styles.cardOuter}>
                            <div className={styles.iconDiv}>
                                <h1 className={styles.h1}><FaFacebookSquare/><a className={styles.socialTitle}
                                                                                href="https://www.facebook.com/MRANNT.19">FACEBOOK</a>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BlogMrAnnt;