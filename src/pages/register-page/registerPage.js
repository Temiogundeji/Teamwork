import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { useFormik } from 'formik';
import { register } from '../../actions/auth';
import './registerPage.css';
import axios from 'axios';

const REGISTER_ENDPOINT = 'http://localhost:8001/api/v1/auth/create-user';

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

const options = [
    {
      id: 1,
      label: "Engineering",
      value: "1",
    },
    {
      id:2,
      label: "DevOps",
      value: "2",
    },
    {
      id:3,
      label: "Growth",
      value: "3",
    },
    {
      label: "Finance",
      value: "4",
    },
  ];


const formData = new FormData();

const RegisterPage = () => {
    const { isLoggedIn } = useSelector(state => state.authReducer),
    { message } = useSelector(state => state.messageReducer),
    [image, setImage] = useState(null),
    dispatch = useDispatch(),
    formik = useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        department_id: "",
        address: ""
      },
      validate,
      onSubmit: (values) => {
        const formData = new FormData();
        formData.append("image", image);
        const userData = {...values, formData}
        submitDataToServer(userData);
      }
    }),
    submitDataToServer = (data) => {
      dispatch(register(data));
    };

    if(isLoggedIn){
        navigate('/profile');
    }
      
    return (
        <>
        
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
                        <form onSubmit={formik.handleSubmit}>
                          <div className="relative">
                            <input value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} required type="text" id="first_name" name="first_name" placeholder="firstname"
                                className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                          {/* {(formik.errors.password) ? <small className="text-sm text-red-400 mb-3">{formik.errors.password}</small> : null} */}
                        </div>
                        <div className="relative">
                            <input value={formik.values.last_name} onChange={formik.handleChange} onBlur={formik.handleBlur} required type="text" id="last_name" name="last_name" placeholder="lastname"
                                className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                          {/* {(formik.errors.password) ? <small className="text-sm text-red-400 mb-3">{formik.errors.password}</small> : null} */}
                        </div>
                        <div className="relative">
                            <input value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} required type="email" id="email" name="email" placeholder="email"
                                className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                          {/* {(formik.errors.email) ? <small className="text-sm text-red-400 mb-3">{formik.errors.email}</small> : null} */}
                        </div>
                        <div className="relative">
                            <input value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} required type="password" id="password" name="password" placeholder="password"
                                className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                          {(formik.errors.password) ? <small className="text-sm text-red-400 mb-3">{formik.errors.password}</small> : null}
                        </div>
                        <div className="relative">
                            <input onChange={(e) => setImage(e.target.files[0])} required type="file" id="image" name="image"
                                className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                          {/* {(formik.errors.password) ? <small className="text-sm text-red-400 mb-3">{formik.errors.password}</small> : null} */}
                        </div>
                        <div className="relative">
                          <select
                            name="department_id"
                            className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                           value={formik.values.department_id}
                           onChange={formik.handleChange}>
                            {options.map((option) => (
                              <option key={option.id} value={formik.values.department_id}>{option.label}</option>
                            ))}
                          </select>
                        </div>
                        <div className="relative">
                            <textarea value={formik.values.address} name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Address" className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"></textarea>
                        </div>
                        <div className="flex my-4">
                            {
                                message && (<label className="flex items-center">
                                <span className="ml-2">{message} </span>
                            </label>) 
                              }     
                        </div>

                        <button
                            className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-red hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Register</button>
                        </form> 
                  </div>
              </div>
          </section>                          
      </>
    );
  }


export default RegisterPage;