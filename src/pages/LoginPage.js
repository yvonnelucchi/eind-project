import React from "react";
import { useHistory } from 'react-router-dom';
import {useForm} from "react-hook-form";

export default function LoginPage({ toggleAuth}) {
    const history = useHistory()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    function signIn() {
        toggleAuth(true);
        history.push('/');
    }

    return (
        <>
            <div className="login-container">

            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email" id="emailadres">Email</label>
                <input type="text"
                       {...register("Emailadres", {required: true})}/>
                {errors.Emailadres?.type === 'required' && "Email is verplicht"}
                <br/>


                <label htmlFor="password" id="password">Wachtwoord</label>
                <input type="text"
                       {...register("Password", {required: true})}/>
                {errors.Password?.type === 'required' && "Password is verplicht"}
                <br/>


            </form>
                <br/>

                <input type="submit" onClick={signIn}/>



        </div>
        </>
    );
}









