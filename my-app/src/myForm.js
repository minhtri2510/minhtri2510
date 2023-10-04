import React, { useState } from 'react';
import './demo.css';

export default function myForm() {

  const [FormData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [FormErrors, setFormErrors] = useState({
    fullname: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...FormErrors };

    // Xác thực tên đầy đủ
    if (FormData.fullname.trim() === '') {
      newErrors.fullname = 'Vui lòng nhập tên đầy đủ';
      isValid = false;
    } else {
      newErrors.fullname = '';
    }

    // Xác thực email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!FormData.email.match(emailPattern)) {
      newErrors.email = 'Email không hợp lệ';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    // Xác thực mật khẩu
    if (FormData.password.length < 6) {
      console.log(FormData.password)
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
      isValid = false;
    } else {
      newErrors.password = '';
    }

    // Xác thực nhập lại mật khẩu
    if (FormData.password !== FormData.password_confirmation) {
      newErrors.password_confirmation = 'Mật khẩu không trùng khớp';
      isValid = false;
    } else {
      newErrors.password_confirmation = '';
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Gửi dữ liệu đăng ký lên máy chủ hoặc thực hiện hành động khác ở đây
      console.log('Dữ liệu đã xác thực và sẽ được gửi đi:', FormData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...FormData,
      [name]: value,
    });
  };


  return (
    <>
      <div class="main">

        <form class="form" id="form-1" onSubmit={handleSubmit}>
          <h3 class="heading">Thành viên đăng ký</h3>

          <div class="spacer"></div>

          <div class="form-group">
            <label for="fullname" class="form-label">Tên đầy đủ</label>
            <input id="fullname" name="fullname" type="text" placeholder="VD: Sơn Đặng" class="form-control" value={FormData.fullname}
              onChange={handleChange} />
            <span className="form-message">{FormErrors.fullname}</span>
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input id="email" name="email" type="text" placeholder="VD: email@domain.com" class="form-control"
              value={FormData.email}
              onChange={handleChange} />
            <span className="form-message">{FormErrors.email}</span>
          </div>

          <div class="form-group">
            <label for="password" class="form-label">Mật khẩu</label>
            <input id="password" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control"
              value={FormData.password}
              onChange={handleChange} />
            <span className="form-message">{FormErrors.password}</span>
          </div>

          <div class="form-group">
            <label for="password_confirmation" class="form-label">Nhập lại mật khẩu</label>
            <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password" class="form-control"
              value={FormData.password_confirmation}
              onChange={handleChange} />
            <span className="form-message">{FormErrors.password_confirmation}</span>
          </div>

          <button class="form-submit">Đăng ký</button>
        </form>

        
      </div>
    </>
  )
}