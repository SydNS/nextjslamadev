import React from 'react'

const menuItems=[
    {
        title:"DashBoard",
        list:[
            {
                title:"Dashboard",
                path:"/dashboard",
                // icon:<MdDashboard/>,
            },
            {
                title:"Users",
                path:"/users",
                // icon:<MdDashboard/>,
            }, {
                title: "Markets",
                path: "/markets",
                // icon:<MdDashboard/>,
            },
        ]
    },
    {
        title:"Users",
        list:[
            {
                title:"All",
                path:"/dashboard",
                // icon:<MdDashboard/>,
            },
            {
                title:"Add Users",
                path:"/user",
                // icon:<MdDashboard/>,
            }
        ]
    },
    {
        title:"Market",
        list:[
            {
                title:"markets",
                path:"/markets",
                // icon:<MdDashboard/>,
            },
            {
                title:"Add Market",
                path:"/market",
                // icon:<MdDashboard/>,
            }
        ]
    }
]
const Sidebar = () => (
    <div>Sidebar</div>
);

export default Sidebar
