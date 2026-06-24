import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Send, CheckCircle2 } from 'lucide-react';
import { FormikInput } from './FormikInput';
import { FormikPhoneInput } from './FormikPhoneInput';
import type { Lead } from '../types';

interface ContactFormProps {
  onAddLead: (lead: Omit<Lead, 'id' | 'date' | 'status'>) => void;
  defaultService?: string;
}

interface FormValues {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  serviceRequired: string;
  message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onAddLead, defaultService = '' }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialValues: FormValues = {
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    serviceRequired: defaultService,
    message: '',
  };

  const servicesList = [
    { value: 'seo', label: 'Search Engine Optimization (SEO)' },
    { value: 'google-ads', label: 'Google Ads Management' },
    { value: 'smm', label: 'Social Media Marketing' },
    { value: 'web-dev', label: 'Website Development' },
    { value: 'local-seo', label: 'Local SEO & Maps' },
    { value: 'ai-marketing', label: 'AI Marketing Solutions' },
    { value: 'content-marketing', label: 'Content Marketing' },
  ];

  const validate = (values: FormValues) => {
    const errors: Record<string, string> = {};

    if (!values.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (values.fullName.trim().length < 3) {
      errors.fullName = 'Name must be at least 3 characters long';
    }

    if (!values.mobileNumber.trim()) {
      errors.mobileNumber = 'Mobile Number is required';
    } else if (values.mobileNumber.trim().length < 10) {
      errors.mobileNumber = 'Please enter a valid mobile number';
    }

    if (!values.emailAddress.trim()) {
      errors.emailAddress = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress)) {
      errors.emailAddress = 'Please enter a valid email address';
    }

    if (!values.serviceRequired) {
      errors.serviceRequired = 'Please select a service';
    }

    if (!values.message.trim()) {
      errors.message = 'Message is required';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
  };

  return (
    <div className="contact-form-card">
      {submitSuccess ? (
        <div className="form-success-container">
          <div className="success-icon-badge">
            <CheckCircle2 size={48} className="success-check-icon" />
          </div>
          <h3 className="success-title">Thank You!</h3>
          <p className="success-message">
            Your enquiry has been successfully submitted. Our team will contact you shortly on your provided number or email.
          </p>
          <button onClick={() => setSubmitSuccess(false)} className="btn btn-outline success-reset-btn">
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              onAddLead(values);
              setSubmitting(false);
              setSubmitSuccess(true);
              resetForm();
              
              setTimeout(() => {
                setSubmitSuccess(false);
              }, 5000);
            }, 1200);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="enquiry-form">
              <h3 className="form-heading">Send an Enquiry</h3>
              <p className="form-subheading">Get custom quotes and grow your business today.</p>

              {/* Full Name */}
              <FormikInput
                label="Full Name"
                name="fullName"
                placeholder="e.g. Ramesh Naidu"
                disabled={isSubmitting}
              />

              {/* Mobile Number & Email Address (Row) */}
              <div className="form-row">
                <div className="form-group col-6 phone-row-field">
                  <FormikPhoneInput
                    label="Mobile Number"
                    name="mobileNumber"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group col-6 email-row-field">
                  <FormikInput
                    label="Email Address"
                    name="emailAddress"
                    type="email"
                    placeholder="e.g. ramesh@example.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Service Required */}
              <FormikInput
                label="Service Required"
                name="serviceRequired"
                as="select"
                disabled={isSubmitting}
              >
                <option value="">Select a Digital Marketing Service</option>
                {servicesList.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </FormikInput>

              {/* Message */}
              <FormikInput
                label="Message"
                name="message"
                as="textarea"
                rows={4}
                placeholder="Tell us about your business goals and marketing needs..."
                disabled={isSubmitting}
              />

              {/* Submit Button */}
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="btn-loader-content">
                    <span className="spinner"></span> Submitting...
                  </span>
                ) : (
                  <>
                    <Send size={16} className="btn-icon" /> Propose Growth Plan
                  </>
                )}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};
