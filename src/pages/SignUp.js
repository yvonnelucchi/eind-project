import React from "react";
import { useForm } from "react-hook-form";




export default function SignUp() {
    const { register, formState: { errors }, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);



    return(
        <>
            <div className="form-container">

            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="email" id="emailadres">Email</label>
                <input type="text"
                       {...register("Emailadres", {required: true})}/>
                {errors.Emailadres?.type === 'required' && "Email is verplicht"}
                <br/>

                <label htmlFor="name" id="firstName">Name</label>
                <input type="text"
                       {...register("firstName", {required: true})}/>
                       {errors.firstName?.type === 'required' && "Voornaam is verplicht"}
                <br/>

                <label htmlFor="lastName" id="lastNameId">Last name</label>
                <input type="text"
                       {...register("lastName", {required: true})}/>
                {errors.lastName?.type === 'required' && "Achternaam is verplicht"}
                <br/>

                <label htmlFor="age" id="ageId">Age</label>
                <input type="text" name="age" id="age"
                       {...register("age", {required: true, min: 18})}/>
                {errors.age?.type === 'required' && "Leeftijd is verplicht"}
                <br/>

                <input type="checkbox" name="terms-and-conditions" id="terms-and-conditions"{...register("termsAndConditions", {required: true})}/>
                <label htmlFor="terms-and-conditions" id="termsAndConditions">Ik ga akkoord met de voorwaarden</label>
                <br/>
                {errors.termsAndConditions?.type === 'required' && "Akkoord is verplicht"}
                <br/>

                <input type="submit"/>

            </form>
            </div>
        </>
    );
}
