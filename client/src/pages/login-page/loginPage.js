import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { login } from '../../actions/login';
import './loginPage.css';

const validate = (values) => {
    const errors = {};

    if(!values.email){
        errors.email = "A valid email address is required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "Required";
    } else if (values.password.length === 0) {
        errors.password = "Password field cannot be empty";
    }
      return errors;
}

const LoginPage = () => {
    const [responseMessage, setResponseMessage] = useState(null),
          [isSubmitting, setIsSubmitting] = useState(false),
          dispatch = useDispatch();
          formik = useFormik({
              initialValue: {
                  email: "",
                  password: ""
              },
              validate,
              onSubmit = (values) => {
                setIsSubmitting(true);
                setResponseMessage(null);
                submitDataToServer(values)
              }
          }),
          sucessCallback = () =>{
              navigate("/dashboard");
          },
          errorCallback = (error) => {
              setIsSubmitting(false);
              setResponseMessage(error);
          },
          callback = {
              success: successCallback,
              error: errorCallback
          },
        submitDataToServer = (data) => {
            dispatch(login(data, callback));
        }
    
    return (
        <>
            <h2>Login Here!</h2>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="Email address"
                    />
                    {formik.errors.email ? (
                      <span className="text-muted text-danger">
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      required
                      type="password"
                      name="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      className="form-control"
                      placeholder="***********"
                    />
                    {formik.errors.password ? (
                      <span className="text-muted text-danger">
                        {formik.errors.password}
                      </span>
                    ) : null}
                  </div>
            </form>
        </>
    );
}

export default LoginPage;