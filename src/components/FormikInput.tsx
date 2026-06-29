import React from 'react';
import { useField } from 'formik';

interface FormikInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  as?: 'input' | 'textarea' | 'select';
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  children?: React.ReactNode;
}

export const FormikInput: React.FC<FormikInputProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  as = 'input',
  rows,
  disabled,
  required,
  children,
}) => {
  const [field, meta] = useField(name);
  const isError = meta.touched && meta.error;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}{required && <span style={{ color: '#ef4444', marginLeft: '2px' }}>*</span>}</label>
      {as === 'textarea' ? (
        <textarea
          {...field}
          id={name}
          rows={rows}
          placeholder={placeholder}
          className={isError ? 'error-input' : ''}
          disabled={disabled}
        />
      ) : as === 'select' ? (
        <select
          {...field}
          id={name}
          className={isError ? 'error-input' : ''}
          disabled={disabled}
        >
          {children}
        </select>
      ) : (
        <input
          {...field}
          type={type}
          id={name}
          placeholder={placeholder}
          className={isError ? 'error-input' : ''}
          disabled={disabled}
        />
      )}
      {isError && <span className="error-text">{meta.error}</span>}
    </div>
  );
};
