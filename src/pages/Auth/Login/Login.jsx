import React from 'react'
import {useForm} from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form form-vertical">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email")}/>
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register("password")}/>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    )
}
export default Login
