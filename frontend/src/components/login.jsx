import React from 'react'

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">

                <h1>Log in</h1>

                <form method={"GET"} action="https://lareact.ddev.site/api/hello">
                    <div className={"flex flex-col items-center"}>
                        <h2>Username or email: </h2>
                        <input className={"input"} type={"text"} name={"loginID"}/>

                        <h2>Password: </h2>
                        <input className={"input"} type={"password"} name={"loginPassword"}/>

                        <button className={"btn"} type={"submit"}>Log In!</button>
                    </div>
                </form>

        </div>
    )
}
export default Login
