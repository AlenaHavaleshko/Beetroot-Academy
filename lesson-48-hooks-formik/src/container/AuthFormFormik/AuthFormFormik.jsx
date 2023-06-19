import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
// import DatePicker from "./elements/DatePicker";
import DatePicker from "../../elements/DatePicker";
// import { useField } from "formik";
// import DatePicker from "react-datepicker";

const AuthFormFormik = () => (
 <div>
  <Formik
   initialValues={{
    firstName: "",
    lastName: "",
    birthDay: null,
    email: "exemple@gmail.com",
    phoneNumber: "+380665555555",
    gender: "Female",
   }}

   onSubmit={(values, actions) => {
    setTimeout(() => {
     alert(JSON.stringify(values, null, 2));
     actions.setSubmitting(false);
    }, 500);
   }}

   validationSchema={Yup.object({
    firstName: Yup.string()
     .max(15, "Must be 15 characters or less")
     .required("oops field is required"),
    lastName: Yup.string()
     .max(15, "Must be 15 characters or less")
     .required("oops field is required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string()
     .required("required")
     // .matches('Phone number is not valid')
     .min(7, "too short")
     .max(15, "too long"),
    birthDay: Yup.date().required('Required').nullable()
   })}
  >
   {props => (

    <Form>
     <h1>Form registration</h1>


     <div className="flex">
      <div className="col-sm-6">
       <label htmlFor="firstName">First Name</label>
       <Field className="form-control" name="firstName" placeholder="Enter first name" type="text" />
       {props.errors.firstName && <div className='form-validation-error'>{props.errors.firstName}</div>}
      </div>
      {/* <input
         type="text"
         label="firstName"
         placeholder="Enter first name"
         onChange={props.handleChange}
         onBlur={props.handleBlur}
         value={props.values.firstName}
         name="firstName"
        /> */}
      <div className="col-sm-6">
       <label htmlFor="lastName">Last Name</label>
       <Field className="form-control" name="lastName" placeholder="Enter last name" type="text" />
       {props.errors.lastName && <div className='form-validation-error'>{props.errors.lastName}</div>}
      </div>
     </div>

     <div className="flex">
      <div className="col-sm-6">
       <label htmlFor="email">Email</label>
       <Field className="form-control" name="email" placeholder="Enter email" type="email" />
       {props.errors.email && <div className='form-validation-error'>{props.errors.email}</div>}
      </div>


      <div className="col-sm-6">
       <label htmlFor="phone-number">Phone Number</label>
       <Field className="form-control" name="phoneNumber" placeholder="Enter phone number" type="text" />
       {props.errors.phoneNumber && <div className='form-validation-error'>{props.errors.phoneNumber}</div>}
      </div>
     </div>

     <div className="flex">
      <div className="col-sm-6">
       <label htmlFor="gender">Gender</label>
       <div role="group" aria-labelledby="my-radio-group">
        <label>
         <Field type="radio" name="gender" value="Male" />
         Male
        </label>
        &nbsp; &nbsp; &nbsp;
        <label>
         <Field type="radio" name="gender" value="Female" />
         Female
        </label>
       </div>
      </div>

      <div className="col-sm-6">
       <DatePicker name="birthDay" label="Birth day"></DatePicker>
      </div>
     </div>

     <div className="col-sm-12">
        <label htmlFor="subject">Subject</label>
        <Field className="form-control" name="subject" as="select" placeholder="Choose option">
         <option value="option1">Option1</option>
         <option value="option2">Option2</option>
         <option value="option3">Option3</option>
        </Field>
     </div>



     <button type="submit" className="form-control">Submit</button>
    </Form>
   )}
  </Formik>
 </div>
);

export default AuthFormFormik;
