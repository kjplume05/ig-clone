import React, {useState} from 'react'


const Register = () => {

    // Defines the state that will store and change the form data
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    // The function that changes the formData variable
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('https://lareact.ddev.site/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok){
                console.log('Register successful', response);
            } else {
                console.error('Register failed 1', response);
            }
        } catch (error) {
            console.log('Register failed 2', error);
        }
    }

    return (
        <div className=" flex flex-col justify-center items-center min-h-screen">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className={"flex flex-col items-center"}>
                    <h2>Username: </h2>
                    <input
                        className={"input"}
                        type={"text"}
                        name={"username"}
                        placeholder={"Username"}
                        autoComplete={"username"}
                        onChange={handleChange}
                        value={formData.username}
                    />

                    <h2>E-mail: </h2>
                    <input
                        className={"input"}
                        type={"text"}
                        name={"email"}
                        placeholder={"E-mail"}
                        autoComplete={"email"}
                        onChange={handleChange}
                        value={formData.email}
                    />

                    <h2>Password: </h2>
                    <input
                        className={"input"}
                        type={"password"}
                        name={"password"}
                        placeholder={"Create Password"}
                        autoComplete={"new-password"}
                        onChange={handleChange}
                        value={formData.password}
                    />

                    <h2>Confirm password: </h2>
                    <input
                        className={"input"}
                        type={"password"}
                        name={"password_confirmation"}
                        placeholder={"Confirm Password"}
                        autoComplete={"new-password"}
                        onChange={handleChange}
                        value={formData.password_confirmation}
                    />

                    <button type={"submit"} className={"p-2 border-dark border-3 rounded-2xl bg-mid hover:cursor-pointer"}>Register!</button>
                </div>
            </form>
        </div>
    )
}
export default Register
