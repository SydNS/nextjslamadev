"use client"
import React         from 'react'
import Link          from "next/link";
import styles        from "./menuLink.module.css"
import {usePathname} from "next/navigation";

// {
// title:"Dashboard",
// path:"/dashboard",
// icon:<MdDashboard/>,
// },
const MenuLink = ({item}) => {
    const pathname = usePathname();
    return (

        <Link href={item.path} className={
            `${styles.container} ${pathname === item.path && styles.active}`
        }>
            <i className={styles.linkIcon}>
                {item.icon}
            </i>
            <p className={styles.linkText}>
                {item.title}
            </p>
        </Link>
    )
};

export default MenuLink
