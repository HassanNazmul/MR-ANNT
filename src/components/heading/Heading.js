import React from 'react';
import styles from './HeadingStyle.module.css'


function Heading(props) {
    return (
        <React.Fragment>
            <div className={styles.title}>MR ANNT</div>
        </React.Fragment>
    );
}

export default Heading;