import React  from 'react'
import styles from './user.module.css'
import Search from "@/app/ui/dashboard/search/search";
import Link   from "next/link";

function TableTop() {
    return <div className={styles.top}>
        <Search placeholder="Search . . ."/>
        <Link className={styles.addButton} href="/dashboard/users/add">
            <button>Add User</button>
        </Link>
    </div>;
}

const User = () => {
    return (
        <div className={styles.container}>

            <TableTop/>
            <table className={styles.tables}>

            </table>
        </div>
    )
}
export default User
