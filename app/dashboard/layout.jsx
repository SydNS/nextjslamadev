import React from 'react'
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import Navbar from "@/app/ui/dashboard/navbar/navbar";
import styles from "../ui/dashboard/dashboard.module.css"

const Layout = () =>{
    return (
        <div>

            <div><Sidebar/></div>
            <div><Navbar/></div>

        </div>
    )
}

export default Layout
