'use client'
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateRegisterForm } from '@/helpers/validate';
import { register } from '@/helpers/auth.helper';
import { useRouter } from 'next/navigation';

const RegisterView = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Register to X- Store</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          address: '',
          phone: ''
        }}
        onSubmit={async (values) => {
          await register(values)
          
          router.push("/login")
        }}
        validate={validateRegisterForm}
      >
        {({ errors }) => (
        <Form>
          <label htmlFor="email">Email:</label>
          <Field type="text" id="email" name="email" placeholder="Johndoe@gmail.com" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" placeholder="********" />
          <ErrorMessage name="password" component="div" />

          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" placeholder="John Doe" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="address">Address:</label>
          <Field type="text" id="address" name="address" placeholder="Posadas, Misiones, Argentina" />
          <ErrorMessage name="address" component="div" />

          <label htmlFor="phone">Phone:</label>
          <Field type="text" id="phone" name="phone" placeholder="+543765757575" />
          <ErrorMessage name="phone" component="div" />

         
          <button disabled={errors.password || errors.email || errors.address || errors.name || errors.phone ? true : false} type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterView