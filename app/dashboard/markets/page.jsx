import React from 'react'
import styles from "@/app/dashboard/users/user.module.css";
import {TableTop} from "@/app/ui/dashboard/tabletop/tabletop";
import Image from "next/image";
import Link from "next/link";
import CustomPagination from "@/app/ui/dashboard/pagination/pagination";
import {marketData} from "@/components/constants";

// const Market = ({data}) => {
const Market = () => {
    const data=marketData
    return (
        <div className={styles.container}>
            <TableTop
                searchPlaceholder="Search . . ."
                addLink="/dashboard/users/add"
                addButtonText="Add User"
            />
            <table className={styles.table}>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Location</td>
                    <td>Created At</td>
                    <td>no. of workers</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {data.map((market, index) => (
                    <tr key={index}>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={market.image}
                                    alt="user image"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                <span className={styles.userName}>{market.name}</span>
                            </div>
                        </td>
                        <td>{market.location}</td>
                        <td>{market.createdAt}</td>
                        <td>{market.role}</td>
                        <td>{market.numberOfWorkers}</td>
                        <td>{market.status}</td>
                        <td className={styles.actions}>
                            <Link href={`/users/${market.id}`}>
                                <button className={`${styles.addButton} ${styles.viewButton}`}>View</button>
                            </Link>
                            <Link href={`/users/${market.id}/edit`}>
                                <button className={`${styles.addButton} ${styles.editButton}`}>Edit</button>
                            </Link>
                            <button
                                className={`${styles.addButton} ${styles.delButton}`}
                                // onClick={() => handleDelete(user.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <CustomPagination/>
        </div>
    );
}

export default Market
