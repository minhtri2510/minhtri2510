import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import '../demo.css'
import axios from 'axios'

export default function Formik() {

  const form = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Bạn phải nhập username'),
      password: Yup.string().required('Bạn phải nhập password').min(7, 'Bạn phải nhập 7 ký tự')
    }), onSubmit: values => {
      // Sử dụng axios để call api server

      axios.post(`https://dummyjson.com/auth/login`, values)
        .then((respost) => {
          console.log(respost.data.token)
          console.log("success")
        }).catch((err) => {
          console.log(err)
        })
    }
  })

  return (
    <div className='main'>
      <form onSubmit={form.handleSubmit} class="form" id="form-2">
        <h3 class="heading">Đăng nhập</h3>

        <div class="spacer"></div>

        <div class="form-group">
          <label for="usename" class="form-label">UserName</label>
          <input id="username" name="username" type="text"
            value={form.values.username} onChange={form.handleChange}
            placeholder="VD: email" class="form-control" />
          {form.errors.username  && (<span class="form-message">{form.errors.username}</span>)}
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Mật khẩu</label>
          <input id="password" name="password" type="password" value={form.values.password} onChange={form.handleChange}
            placeholder="Nhập mật khẩu" class="form-control" />
          {form.errors.password && form.touched.password && (<span class="form-message">{form.errors.password}</span>)}
        </div>
        <button class="form-submit">Đăng nhập</button>
      </form>
    </div>
  )
}
