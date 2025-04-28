import React from 'react';
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>NOT FOUND</h1>
            <Link to={"/"}>
                <button>Go back</button>
            </Link>
        </div>
    )
}
export default NotFoundPage
