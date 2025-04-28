import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div>
                <Link className={"btn m-2"} to={"/register"}>
                    Register
                </Link>

                <Link className={"btn m-2"} to={"/login"}>
                    Log in
                </Link>
            </div>
        </div>
    )
}
export default Home
