import React from "react";
import validate from './LoginFormValidationRules';
import {useState} from "react";
import UseFormW from "UseFormW";


const FormW = () => {
    const {
      values,
      handleChange,
      handleSubmit,
    } = useFormW(login, validate);
  <div className="control">
  <input
    className={`input ${errors.email && 'is-danger'}`}
    type="email"
    name="email"
    onChange={handleChange}
    value={values.email || ''}
    required
  />
  {errors.email && (
    <p className="help is-danger">{errors.email}</p>
  )}
</div>
}

export default FormW;