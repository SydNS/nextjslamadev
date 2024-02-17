import React from 'react'
import Card  from "@/app/ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css"
import RightBar from "@/app/ui/dashboard/rightbar/rightBar";
import Transaction from "@/app/ui/dashboard/transactions/transaction";
import Chart from "@/app/ui/dashboard/chart/chart";
const Dashboard = () => (
    <div className={styles.wrapper}>
        <div className={styles.main}>
            <div className={styles.cards}>
                <Card/>
                <Card/>
                <Card/>
            </div>
            <Transaction/>
            <Chart/>
        </div>
        <div className={styles.side}>
            <RightBar/>
        </div>

    </div>
);

export default Dashboard
