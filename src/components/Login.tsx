import React from 'react'
import "./Login.css"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// formik
import { useFormik } from "formik";
import * as Yup from "yup";





const Login = () => {


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      channel: Yup.string().required("Required"),
    }),
  });
  console.log(formik.touched);


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <Box className='box'>
      <TextField className='textField' name='phone' label="شماره تلفن" variant="outlined" />
      <br />
      <TextField className='textField' name='password' label="گذرواژه" variant="outlined" />
      </Box>
      </form>
    </div>
  )
}

export default Login
