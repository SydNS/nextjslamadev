import React from 'react';
import styles from './user.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Link from 'next/link';
import Image from 'next/image';
import {userData} from "@/components/constants";
import {Pagination} from "reactstrap";
import CustomPagination from "@/app/ui/dashboard/pagination/pagination";
import {TableTop} from "@/app/ui/dashboard/tabletop/tabletop";

const data=userData

// const User = ({ data }) => {
const User = () => {
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
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {data.map((user, index) => (
                    <tr key={index}>
                        <td>
                            <div className={styles.user}>
                                <Image
                                    src={user.image}
                                    alt="user image"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                <span className={styles.userName}>{user.name}</span>
                            </div>
                        </td>
                        <td>{user.email}</td>
                        <td>{user.createdAt}</td>
                        <td>{user.role}</td>
                        <td>{user.status}</td>
                        <td className={styles.actions}>
                            <Link href={`/users/${user.id}`}>
                                <button className={`${styles.addButton} ${styles.viewButton}`}>View</button>
                            </Link>
                            <Link href={`/users/${user.id}/edit`}>
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
};

export default User;


