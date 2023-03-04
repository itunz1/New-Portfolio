import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




export default function Contact() {


  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, });
    setErrors(validate({ ...state, [e.target.name]: e.target.value },));
  }

  function validate(state) {
    let errors = {};
    if (!state.name) {
      errors.name = "Name is required"
    } else if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g.test(state.name)) {
      errors.name = "Name cannot contain special characters"
    }
    if (!state.email) {
      errors.email = "Email is required"
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email)) {
      errors.email = "Invalid Email"
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Run checks
    if (!state.name) {
      toast.error('Name Field Empty 😅', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      return;
    }
    if (!state.email) {
      toast.error('Email Field Empty 😅', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      return;
    }
    if (!state.message) {
      toast.error('Description Field Empty 😅', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      return;
    }
    if (state.message.length > 300) {
      toast.error('Description is too long 😅', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1500,
      });
      return;
    };

    if (state) {
      // Handle form validation success
      const { name, email, subject, message } = state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs.send('service_lv19eh4', 'template_02f7vxh', templateParams, 'bya7s33rnzohf4gUn');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

      resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  };

  //Reset Form Fuction
  const resetForm = () => {
    setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }


  return (
    <div className=''>
      <ToastContainer limit={1} />
      <h3 className='mb-5 text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl'>Contact Me</h3>
      <div className='flex flex-col-reverse md:flex-row md:max-h-[700px] justify-center'>
        <div className='md:w-[27%] mx-auto px-3 mt-5 w-[95%] md:px-0 md:ml-4 md:mt-[4.5rem] lg:mt-auto md:h-fit lg:h-fit lg:ml-auto lg:py-8 lg:px-12 lg:w-[35%] bg-[#2a2c39] justify-center flex'>
          <ul className='grid justify-around w-full grid-cols-2 gap-x-5 md:gap-0 md:w-11/12 lg:w-auto lg:px-auto lg:ml-0 md:flex md:flex-col'>
            <li className='contact-info'>
              <h6 className='text-sm text-white sm:mb-2 lg:mb-5 lg:text-base'>Phone</h6>
              <p className='text-[#858792] text-xs sm:text-sm lg:text-base'>(+58) 414 8524974</p>
            </li>
            <li className='contact-info'>
              <h6 className='text-sm text-white sm:mb-2 lg:mb-5 lg:text-base'>Email</h6>
              <p className='text-[#858792] text-xs sm:text-sm lg:text-base'>stx_jose@hotmail.com</p>
            </li>
            <li className='contact-info'>
              <h6 className='text-sm text-white sm:mb-2 lg:mb-5 lg:text-base'>Location</h6>
              <p className='text-[#858792] text-xs sm:text-sm lg:text-base'>Venezuela</p>
            </li>
            <li className='contact-info'>
              <h6 className='text-sm text-white sm:mb-2 lg:mb-5 lg:text-base'>Address</h6>
              <p className='text-[#858792] text-xs sm:text-sm lg:text-base'>Puerto Ordaz - Altavista</p>
            </li>
          </ul>
        </div>

        <div className='p-7 md:p-0 md:w-[75%] lg:w-[65%] '>
          <form className='flex flex-col justify-between w-full mt-0 text-white md:p-12 lg:p-20' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-5 mb-5 md:mb-10 md:gap-10 md:flex-row'>
              <div className='md:w-6/12'>
                <label className='block mb-1 md:mb-2'>Name</label>
                <input className='text-sm lg:text-base w-full h-2 md:w-full md:h-10 bg-transparent border-[1px] border-[rgba(255,255,255,.1)] p-7'
                  type='text'
                  name='name'
                  value={state.name}
                  onChange={handleChange}
                  placeholder='Name' />
                {errors.name && (<p className='text-xs text-[#fff59d] md:text-sm'>{errors.name}</p>)}
              </div>

              <div className='md:w-6/12'>
                <label className='block mb-1 md:mb-2'>Email</label>
                <input className='text-sm lg:text-base w-full h-2 md:w-full md:h-10 bg-transparent border-[1px] border-[rgba(255,255,255,.1)] p-7'
                  type='email'
                  name='email'
                  value={state.email}
                  onChange={handleChange}
                  placeholder='Email' />
                {errors.email && (<p className='text-xs text-[#fff59d] md:text-sm'>{errors.email}</p>)}
              </div>
            </div>

            <div className='flex flex-col'>
              <label className='mb-1 md:mb-2'>Subject</label>
              <input className='text-sm lg:text-base h-[4rem] md:h-10 mb-5 md:mb-10 bg-transparent border-[1px] border-[rgba(255,255,255,.1)] p-7'
                type='subject'
                name='subject'
                value={state.subject}
                onChange={handleChange}
                placeholder='Subject' />

              <label className='mb-1 md:mb-2'>Message</label>
              <textarea className='text-sm lg:text-base h-[230px] md:max-h-[300px] md:h-[240px] bg-transparent border-[1px] border-[rgba(255,255,255,.1)] p-5'
                name='message'
                onChange={handleChange}
                placeholder='Message' />
              <p className={`text-white text-end ${state.message.length > 300 ? 'text-red-500' : ""}`}>{state.message.length}/300</p>
              <button className='border-[1px] border-[rgba(255,255,255,.1)] w-3/12 mx-auto p-3 rounded-full hover:bg-[#858792] hover:bg-[#85879215] inline-block transition duration-500 ease-in-out hover:-translate-y-1' type='submit'>Send</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
