import React from 'react'
import {useParams} from "react-router-dom";

const dashboardItems = [
    {id: 1, title: "My Profile"},
    {id: 2, title: "My Projects"},
];


const DashboardItems = () => {
    const {id} = useParams();

    const elem = dashboardItems.find(item => item.id == id);

    return (
        <>
            {elem.title}
        </>
    )
}
export default DashboardItems
