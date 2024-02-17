import React from 'react'
import styles from "./transaction.module.css"
import Image from "next/image";

export const transactions = [
    {
        name: 'Jane Doe',
        status: 'Done',
        date: '23rd/Jan/2023',
        amount: 6000000,
        image: '/noavatar.png'
    },
    {
        name: 'John Doe',
        status: 'Pending',
        date: '23rd/Jan/2023',
        amount: 6000000,
        image: '/astronaut.png'
    },
    {
        name: 'Steven Doe',
        status: 'Pending',
        date: '3rd/Feb/2023',
        amount: 6000000,
        image: '/noproduct.jpg'
    }
];
const Transaction = ({ transactions }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
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
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>
                            <div className={styles.user}>
                                <Image src={transaction.image} alt="user image" width={40} height={40}
                                       className={styles.userImage}/>
                                <span className={styles.userName}>{transaction.name}</span>
                            </div>
                        </td>
                        <td>
                                <span className={`${styles.status} ${styles[transaction.status.toLowerCase()]}`}>
                                    {transaction.status}
                                </span>
                        </td>
                        <td>{transaction.date}</td>
                        <td>{transaction.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Transaction
