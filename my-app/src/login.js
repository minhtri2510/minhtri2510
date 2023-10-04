import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        password: '',
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...formErrors };

        // Xác thực username
        //^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
        const usernamePattern = /^[a-zA-Z0-9._%+-]+$/;
        if (!formData.username.match(usernamePattern)) {
            newErrors.username = 'username không hợp lệ';
            isValid = false;
        } else {
            newErrors.username = '';
        }

        // Xác thực mật khẩu
        if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
            isValid = false;
        } else {
            newErrors.password = '';
        }

        setFormErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            // Sử dụng axios để call api server

            //   axios.post(`https://dummyjson.com/auth/login`, formData)
            //         .then((respost) => {
            //             console.log(respost.data.token)
            //             console.log("success")
            //         }).catch((err) => {
            //             console.log(err)
            //         })

            //Sử dụng fetch api để call api

            // fetch('https://dummyjson.com/auth/login', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(formData),
            // })
            //   .then((response) => {
            //     if (response.ok) {
            //       console.log('success');
            //     } else {
            //       throw new Error('Request failed');
            //     }
            //   })
            //   .catch((error) => {
            //     console.error(error);
            //   });

            //call api bằng jquery ajax
            $.ajax({
                url: 'https://dummyjson.com/auth/login',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(formData),
                success: function(response) {
                  console.log('success');
                  // Xử lý dữ liệu phản hồi ở đây
                },
                error: function(xhr, status, error) {
                  console.error(error);
                  // Xử lý lỗi ở đây
                }
              });

            // Call api sử dụng XMLHttpRequest
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://dummyjson.com/auth/login', true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function () {
                if (xhr.status === 200) {
                    console.log('success');
                } else {
                    console.log('Request failed');
                }
            };

            xhr.onerror = function () {
                console.error('Request failed');
            };

            xhr.send(JSON.stringify(formData));

            console.log('Dữ liệu đã xác thực và sẽ được gửi đi:', formData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='main'> 
            <form class="form" id="form-2" onSubmit={handleSubmit}>
                <h3 class="heading">Đăng nhập</h3>

                <div class="spacer"></div>

                <div class="form-group">
                    <label for="username" class="form-label">
                        UserName
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="VD: username@domain.com"
                        class="form-control"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <span class="form-message">{formErrors.username}</span>
                </div>

                <div class="form-group">
                    <label for="password" class="form-label">
                        Mật khẩu
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Nhập mật khẩu"
                        class="form-control"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span class="form-message">{formErrors.password}</span>
                </div>

                <button class="form-submit" type="submit">
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}
