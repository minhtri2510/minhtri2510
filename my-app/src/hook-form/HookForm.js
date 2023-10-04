import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
type Form = {
    username: String,
    password: String
  }
export default function HookForm() {
  
  const { handleSubmit, control, errors } = useForm<Form>();

  const onSubmit = (data:Form) => {
    // Đoạn mã xử lý khi người dùng gửi biểu mẫu
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form" id="form-2">
        <h3 className="heading">Đăng nhập</h3>

        <div className="spacer"></div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email là trường bắt buộc',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Email không hợp lệ',
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="email"
                type="text"
                placeholder="VD: email@domain.com"
                className="form-control"
              />
            )}
          />
          <span className="form-message">{errors.email && errors.email.message}</span>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Mật khẩu
          </label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Mật khẩu là trường bắt buộc',
              minLength: {
                value: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự',
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                id="password"
                type="password"
                placeholder="Nhập mật khẩu"
                className="form-control"
              />
            )}
          />
          <span className="form-message">{errors.password && errors.password.message}</span>
        </div>

        <button type="submit" className="form-submit">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
