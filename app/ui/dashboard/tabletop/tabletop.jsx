import React from 'react'
import Link  from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import styles from './tableTop.module.css';

export const TableTop = ({ searchPlaceholder, addLink, addButtonText }) => (
    <div className={styles.top}>
        <Search placeholder={searchPlaceholder}/>
        <Link className={styles.addButton} href={addLink}>
            <button>{addButtonText}</button>
        </Link>
    </div>
);

