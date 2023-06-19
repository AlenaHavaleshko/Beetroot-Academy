import React from "react";
import DateView from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMassage } from "formik";
// import TextError from "./TextError"

function DatePicker(props) {
 const { label, name, ...rest} = props
return (
    <div >
     <label htmlFor={name}>{label}</label>
     <Field
     name={name}>
    {
     ({form, field}) => {
      const { setFieldValue } = form
      const { value } = field
      return (
      <DateView 
      className="form-control"
         id={name} 
         {...field} 
         {...rest} 
         selected={value}
         onChange={val1 => setFieldValue(name, val1)}
         />
      )
     }
    }

 </Field>

</div>

)

}

export default DatePicker;