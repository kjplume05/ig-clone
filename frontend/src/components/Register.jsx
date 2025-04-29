import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


const Register = () => {

    // State for displaying errors
    const [errors, setErrors] = useState({})

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

    // Function for when the register form gets called
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{ // tries to get a response from the api

            // makes a POST request to the API including the data type and the required answer type
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
            } else { // await is used to wait while the fetch request gets sent back and only then execute the code
                const errorData = await response.json();

                if (errorData.errors) {
                    setErrors(errorData.errors);
                }
                console.error('Register failed:', errorData);
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
                    {errors.username && <p className={"text-red-500"}>{errors.username[0]}</p>}

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
                    {errors.email && <p className={"text-red-500"}>{errors.email[0]}</p>}

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
                    {errors.password && <p className={"text-red-500"}>{errors.password[0]}</p>}

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
                    {errors.password_confirmation && <p className={"text-red-500"}>{errors.password_confirmation[0]}</p>}

                    <button type={"submit"} className={"p-2 border-dark border-3 rounded-2xl bg-mid hover:cursor-pointer"}>Register!</button>
                </div>
            </form>
        </div>
    )
}
export default Register
