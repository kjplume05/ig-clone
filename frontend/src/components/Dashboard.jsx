import React from 'react'
import {Link, Outlet} from "react-router-dom";

const dashboardItems = [
    {id: 1, title: "My Profile"},
    {id: 2, title: "My Projects"},
];


const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {dashboardItems.map((item, index) => (
                    <li key={index}>
                        <Link to={`/dashboard/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    )
}
export default Dashboard
