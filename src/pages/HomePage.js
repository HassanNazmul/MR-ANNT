import React from 'react';
import Heading from "../components/heading/Heading";
import Profile from "../components/profile/Profile";
import styles from './HomePageStyle.module.css'
import SocialMedia from "../components/socialMedia/SocialMedia";

function HomePage() {
    return (
        <React.Fragment>
            <div className={styles.gap}></div>
            <Heading/>
            <div className={styles.gap}></div>
            <Profile/>
            <div className={styles.gap}></div>
            <SocialMedia/>
        </React.Fragment>
    );
}

export default HomePage;