import React  from 'react'
import Link   from "next/link";
import styles from "./menuLink.module.css"

// {
// title:"Dashboard",
// path:"/dashboard",
// icon:<MdDashboard/>,
// },
const MenuLink = ({item}) => (
    <Link href={item.path} className={styles.container}>
        <p>
            {item.icon}
            {item.title}
        </p>
    </Link>
);

export default MenuLink
