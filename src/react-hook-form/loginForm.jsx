import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return ( 
        <div className="container-fluid">
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" {...register('username', {required:true})}/>
                <br />
                {errors.username && <div>Username can not be empty</div>}
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" {...register('password', {required: true, minLength: 5})}/>
                <br />
                {errors.password && <div>Password can not be empty</div>}
                <input type="submit" />
            </form>
        </div>
     );
}
 
export default LoginForm;