import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { useFormik } from 'formik';
import { register } from '../../actions/auth';
import './registerPage.css';

let formData = new FormData();

const validate = (values) => {
    const errors = {};

    if(!values.first_name){
        errors.first_name = "Post your first name if its cute enough.";
    }

    if(values.first_name.length < 2){
        errors.first_name = "A person's first name should be longer than that.";
    }

    if(!values.last_name){
        errors.last_name = "Post your first name if its cute enough.";
    }

    if(values.first_name.length < 2){
        errors.first_name = "A person's first name should be longer than that.";
    }

    if(!values.email){
        errors.email = "A valid email address is required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "Enter your password here!";
    } else if (values.password.length === 0) {
        errors.password = "Password field cannot be empty";
    }

    if(!values.department_id){
        errors.department_id = "Kindly provide the department you belong.";
    }

    if(!values.address){
        errors.address = "You are not an alien, are you?";
    }
    else if(values.address.length < 10){
        errors.address = "Your address is damn too short mhen!";
    }

    if(!values.image) {
        errors.image =  "Update a cute picture of yourself";
    }
      return errors;
};

const RegisterPage = () => {
    const { isLoggedIn } = useSelector(state => state.authReducer);
    const { message } = useSelector(state => state.messageReducer);
    const [image, setImageValue] = useState(null);
    const dispatch = useDispatch();
    const formik = useFormik({
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
        submitDataToServer(values);
      }
    }),
    submitDataToServer = (data) => {
        formData = data;
       formData.append("image", image);
      dispatch(register(formData));
    //   navigate('/');
    };

    if(isLoggedIn){
        navigate('/profile');
    }
      
    return (
        <>
        <form onSubmit = {formik.handleSubmit}>
          <section className="text-red-500 heading-font">
              <div className="container px-5 p-3  pb-24 mx-auto md:w-3/4 lg:px-4">
                  <a href="#" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mb-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                      <span className="ml-3 text-xl">Teamwork</span>
                  </a>
                  <div
                      className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                        <div className="relative mt-4">
                          <input value={formik.values.first_name} onChange={formik.handleChange} required type="text" id="text" name="first_name" placeholder="First Name"
                              className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            {(formik.errors.first_name) ? <small className="text-sm text-red-400 mb-3">{formik.errors.first_name}</small> : null}
                        </div>
                        <div className="relative mt-4">
                          <input value={formik.values.last_name} onChange={formik.handleChange} required type="text" id="text" name="last_name" placeholder="Last Name"
                              className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            {(formik.errors.last_name) ? <small className="text-sm text-red-400 mb-3">{formik.errors.last_name}</small> : null}
                        </div>
                       <div className="relative mt-4">
                          <input value={formik.values.email} onChange={formik.handleChange} required type="email" id="email" name="email" placeholder="Email"
                              className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        {(formik.errors.email) ? <small className="text-sm text-red-400 mb-3">{formik.errors.email}</small> : null}
                      </div>
                      <div className="relative mt-4">
                          <input value={formik.values.password} onChange={formik.handleChange} required type="password" id="password" name="password" placeholder="Password"
                              className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        {(formik.errors.password) ? <small className="text-sm text-red-400 mb-3">{formik.errors.password}</small> : null}
                      </div>
                      <div className="relative mt-4">
                                <input type="file" id="file" 
                                    onChange={(event) => {
                                    setImageValue("image", event.target.files[0]);
                                }}
                                 name="image" placeholder="Upload Image"
                                    className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                                {(formik.errors.image) ? <small className="text-sm text-red-400 mb-3">{formik.errors.image}</small> : null}
                        </div>

                        <div className="relative mt-4">
                        <select
                            name="department_id"
                            value={formik.values.department_id}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
                        >
                            <option disabled value="" label="Select your department" />
                            <option value="1" label="Engineering" />
                            <option value="2" label="DevOps" />
                            <option value="3" label="Marketing" />
                        </select>
                        {formik.errors.color &&
                            formik.touched.color &&
                            <small className="text-sm text-red-400 mb-3">
                            {formik.errors.color}
                            </small>}
                        </div>
                        <div  className="relative mt-4">
                            <textarea 
                                name="address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                                placeholder="Address"
                                className="w-full px-4 py-2 mb-4 text-red transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">

                            </textarea>
                            {formik.errors.department_id &&
                                formik.touched.department_id &&
                                <small className="text-sm text-red-400 mb-3">
                                {formik.errors.department_id}
                                </small>}
                            </div>
                      <div className="flex my-4">
                          {
                              message && (<label className="flex items-center">
                              <span className="ml-2">{message} </span>
                          </label>) 
                            }     
                      </div>

                      <button onSubmit = {formik.handleSubmit}
                      type="submit"
                          className="px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-red-500 rounded-lg hover:bg-red-red hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">REGISTER</button>
                  </div>
              </div>
          </section>
         </form>                          
      </>
    );
}

export default RegisterPage;