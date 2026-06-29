import React from 'react';
import { useField } from 'formik';
import PhoneInputReact from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneInput = (PhoneInputReact as any).default || PhoneInputReact;

interface FormikPhoneInputProps {
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
}

export const FormikPhoneInput: React.FC<FormikPhoneInputProps> = ({ label, name, disabled, required }) => {
  const [field, meta, helpers] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <div className="form-group phone-group-field">
      <label htmlFor={name}>{label}{required && <span style={{ color: '#ef4444', marginLeft: '2px' }}>*</span>}</label>
      <PhoneInput
        country={'in'}
        value={field.value}
        onChange={(value: string) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        disabled={disabled}
        inputProps={{
          name: name,
          id: name,
        }}
        containerClass="phone-input-container"
        inputClass={`phone-input-field ${isError ? 'error-input' : ''}`}
        buttonClass="phone-input-button"
      />
      {isError && <span className="error-text">{meta.error}</span>}
    </div>
  );
};
