import React                                                                               from 'react'
import {
    MdDashboard,
    MdGroup, MdLogout,
    MdPerson,
    MdPerson2,
    MdReport, MdSettings,
    MdShop,
    MdShoppingBag,
    MdVerifiedUser
} from "react-icons/md";
import styles                                                                              from "./sidebar.module.css"
import MenuLink
                                                                     from "@/app/ui/dashboard/sidebar/menuLink/menuLink";
import Image                                                                              from "next/image";

const menuItems = [
    {
        title: "DashBoard",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard/>,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdVerifiedUser/>,
            }, {
                title: "Markets",
                path: "/dashboard/markets",
                icon: <MdShop/>,
            },
        ]
    }, {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdReport/>,
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: <MdGroup/>,
            }, {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdShop/>,
            },
        ]
    },
    {
        title: "Users",
        list: [
            {
                title: "All",
                path: "/dashboard/users/all",
                icon: <MdPerson2/>,
            },
            {
                title: "Add Users",
                path: "/dashboard/user",
                icon: <MdPerson/>,
            }
        ]
    },
    {
        title: "Market",
        list: [
            {
                title: "Markets",
                path: "/markets",
                icon: <MdShop/>,
            },
            {
                title: "Add Market",
                path: "/dashboard/market",
                icon: <MdShoppingBag/>,
            }
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Setting",
                path: "/setting",
                icon: <MdSettings/>,
            },
            {
                title: "Profile",
                path: "/dashboard/profile",
                icon: <MdPerson/>,
            }
        ]
    }
]
const Sidebar = () => (
    <div className={styles.container}>
        <div className={styles.user}>
            <Image className={styles.userImage} src="/astronaut.png" alt="user image" width="50" height="50"/>
            <span className={styles.username}>Sydney Doe</span>
            <span className={styles.userTitle}>Sr Dev</span>
        </div>
        <ul className={styles.menuList}>
            {menuItems.map((item) => {
                return (
                    <li key={item.title}>
                        <span className={styles.item}>{item.title}</span>
                        <ul className={styles.menuList}>
                            {item.list.map(it=>(
                                <MenuLink item={it} key={item.title}/>
                            ))}
                        </ul>
                    </li>
                )
            })}
        </ul>
        <button className={styles.logout}>
            <MdLogout/>
            Logout
        </button>
    </div>
);

export default Sidebar
