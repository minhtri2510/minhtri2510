import React from "react";
import { useForm } from "react-hook-form";
import '../demo.css';

const SimpleHookForm = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} class="form" id="form-2">
      <h3 class="heading">Đăng nhập</h3>
      <div class="spacer"></div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input id="email" name="email" type="text"
          placeholder="VD: email@domain.com" class="form-control"
          {...register("email", {
            required: 'Chưa nhập email!',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+$/,
              message: 'email is invalid'
            }
          })}
        />
        {errors.email && <span class="form-message">{errors.email.message}</span>}
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Mật khẩu</label>
        <input id="password" name="password" type="password"
          placeholder="Nhập mật khẩu" class="form-control"
          {...register('password', {
            required: 'Chưa nhập pasword',
            minLength: {
              value: 6,
              message: 'Ít nhất 6 ký tự'
            }
          })}
        />
        {errors.password && <span class="form-message">{errors.password.message}</span>}
      </div>
      <button class="form-submit">Đăng nhập</button>
    </form>
  )
};

export default SimpleHookForm;
