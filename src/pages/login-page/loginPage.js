import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { useFormik } from 'formik';
import { login } from '../../actions/auth';
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
};

const LoginPage = () => {
    const { isLoggedIn } = useSelector(state => state.authReducer),
    { message } = useSelector(state => state.messageReducer),
    [loading, setLoading] = useState(false),
    dispatch = useDispatch(),
    formik = useFormik({
      initialValues: {
        email: "",
        password: ""
      },
      validate,
      onSubmit: (values) => {
        submitDataToServer(values);
      }
    }),
    submitDataToServer = (data) => {
        const { email, password } = data;
      dispatch(login(email, password));
    //   navigate('/');
    };

    if(isLoggedIn){
        navigate('/profile');
    }
      
    return (
        <>
        <form onSubmit = {formik.handleSubmit}>
          <section className="text-red-500 heading-font">
              <div className="container px-8 p-5  pb-24 mx-auto md:w-3/4 lg:px-4">
                  <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span className="ml-3 text-xl">Teamwork</span>
                  </a>
                  <div
                      className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                       <div className="relative">
                          <input value={formik.values.email} onChange={formik.handleChange} required type="email" id="email" name="email" placeholder="email"
                              className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        {(formik.errors.email) ? <small className="text-sm text-red-400 mb-3">{formik.errors.email}</small> : null}
                      </div>
                      <div className="relative">
                          <input value={formik.values.password} onChange={formik.handleChange} required type="password" id="password" name="password" placeholder="password"
                              className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        {(formik.errors.password) ? <small className="text-sm text-red-400 mb-3">{formik.errors.password}</small> : null}
                      </div>
                      <div className="flex my-4">
                          {
                              message && (<label className="flex items-center">
                              <span className="ml-2">{message} </span>
                          </label>) 
                            }     
                      </div>

                      <button onSubmit = {formik.handleSubmit}
                          className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-red hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Button</button>
                      <p className="mx-auto mt-3 text-xs text-red-500">Login here..</p>
                  </div>
              </div>
          </section>
         </form>                          
      </>
    );
}

export default LoginPage;