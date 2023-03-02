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
    <div>
      <ToastContainer limit={1} />
      <h3 className='mb-16 text-5xl font-bold text-center text-white'>Contact Me</h3>
      <div className='flex max-h-[700px]'>
        <div className='py-20 px-14 bg-[#2a2c39] lg:w-[35%]'>
          <ul>
            <li className='mb-5 py-7 px-9 bg-[#252734]'>
              <h6 className='mb-5 text-white'>Phone</h6>
              <p className='text-[#858792]'>(+58) 414 8524974</p>
            </li>
            <li className='mb-5 py-7 px-9 bg-[#252734]'>
              <h6 className='mb-5 text-white'>Email</h6>
              <p className='text-[#858792]'>stx_jose@hotmail.com</p>
            </li>
            <li className='mb-5 py-7 px-9 bg-[#252734]'>
              <h6 className='mb-5 text-white'>Location</h6>
              <p className='text-[#858792]'>Venezuela</p>
            </li>
            <li className='mb-5 py-7 px-9 bg-[#252734]'>
              <h6 className='mb-5 text-white'>Address</h6>
              <p className='text-[#858792]'>Puerto Ordaz - Altavista</p>
            </li>
          </ul>
        </div>

        <div className='lg:w-[65%] '>
          <form className='flex flex-col justify-between w-full p-20 mt-0 text-white' onSubmit={handleSubmit}>
            <div className='flex gap-10 mb-10'>
              <div className='w-6/12'>
                <label className='block mb-2'>Name</label>
                <input className='w-full h-10 bg-transparent border-[1px] border-[rgba(255,255,255,.1)] p-7'
                  type='text'
                  name='name'
                  value={state.name}
                  onChange={handleChange}
                  placeholder='Name' />
                {errors.name && (<p className='text-white'>{errors.name}</p>)}
              </div>

              <div className='w-6/12'>
                <label className='block mb-2'>Email</label>
                <input className='w-full h-10 bg-transparent border-[1px] border-[rgba(255,255,255,.1)] p-7'
                  type='email'
                  name='email'
                  value={state.email}
                  onChange={handleChange}
                  placeholder='Email' />
                {errors.email && (<p className='text-white'>{errors.email}</p>)}
              </div>
            </div>

            <div className='flex flex-col'>
              <label className='mb-2'>Subject</label>
              <input className='h-10 mb-10 bg-transparent border-[1px] border-[rgba(255,255,255,.1)] p-7'
                type='subject'
                name='subject'
                value={state.subject}
                onChange={handleChange}
                placeholder='Subject' />

              <label className='mb-2'>Message</label>
              <textarea className='max-h-[300px] h-[240px] bg-transparent border-[1px] border-[rgba(255,255,255,.1)] p-5'
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
