import React  from 'react'
import styles from "./transaction.module.css"
import Image  from "next/image";

const Transaction = () => {
    return (<div className={styles.container}>
        <h2 className={styles.title}> Latest Transactions</h2>
        <table className={styles.table}>
            <thead>
            <tr>
                <td>Name</td>
                <td>Status</td>
                <td>Date</td>
                <td>Amount</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <div className={styles.user}>
                        <Image src="/noavatar.png" alt="user image" width={40} height={40} className={styles.userImage}/>
                        John Doe
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Done
                    </span>
                </td>
                <td>23rd/Jan/2023</td>
                <td>6000000</td>
            </tr>
            <tr>
                <td>
                    {/*<Image/>*/}
                    Jane Doe
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Pending
                    </span>
                </td>
                <td>23rd/Jan/2023</td>
                <td>6000000</td>
            </tr>
            </tbody>
        </table>
    </div>)
}
export default Transaction
