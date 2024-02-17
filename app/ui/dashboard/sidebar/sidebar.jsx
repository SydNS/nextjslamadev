import React                                                         from 'react'
import {MdClass, MdDashboard, MdShop, MdShoppingBag, MdVerifiedUser} from "react-icons/md";
import styles  from "./sidebar.module.css"

const menuItems=[
    {
        title:"DashBoard",
        list:[
            {
                title:"Dashboard",
                path:"/dashboard",
                icon:<MdDashboard/>,
            },
            {
                title:"Users",
                path:"/users",
                icon:<MdVerifiedUser/>,
            }, {
                title: "Markets",
                path: "/markets",
                icon:<MdShop/>,
            },
        ]
    },
    {
        title:"Users",
        list:[
            {
                title:"All",
                path:"/dashboard",
                icon:<MdDashboard/>,
            },
            {
                title:"Add Users",
                path:"/user",
                icon:<MdDashboard/>,
            }
        ]
    },
    {
        title:"Market",
        list:[
            {
                title:"markets",
                path:"/markets",
                icon:<MdShop/>,
            },
            {
                title:"Add Market",
                path:"/market",
                icon:<MdShoppingBag/>,
            }
        ]
    }
]
const Sidebar = () => (
    <div className={styles.container}>
        <ul>
            {menuItems.map((item)=>{
                return (
                    <li key={item.title}>{item.title}</li>
                )
            })}
        </ul>
    </div>
);

export default Sidebar
