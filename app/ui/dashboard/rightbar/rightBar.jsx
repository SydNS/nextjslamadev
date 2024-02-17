import React from 'react'
import styles from './rightbar.module.css'
import Image from "next/image";
import {MdPlayCircleFilled} from "react-icons/md";
const RightBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="picture" width="50" height="50"/>
                </div>
                <div className={styles.texts}>
                    <span className={styles.notification}>Available Now
                    </span>
                    <h3 className={styles.title}>How to use the new version of admin dashboard
                    </h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn </span>
                    <p className={styles.desc}>
                        Lorem ipsum  dolor sit amet Lorem ipsum  dolor sit amet Lorem ipsum  dolor sit amet
                        Lorem ipsum  dolor sit amet
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled/>
                        Watch
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightBar
