import React from "react";
import { useForm } from "react-hook-form";

const SimpleHookForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          {...register({ required: "Please enter a username." })}
        />
        {errors.username && <div>{errors.username.message}</div>}
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          {...register('email',{
            required: "Please enter an email address.",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address.",
            },
          })}
        />
        {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          {...register({
            required: "Please enter a password.",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long.",
            },
          })}
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      <button type='submit'>Sign up</button>
    </form>
  );
};

export default SimpleHookForm;
