import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Send, CheckCircle2 } from 'lucide-react';
import { FormikInput } from './FormikInput';
import { FormikPhoneInput } from './FormikPhoneInput';
import type { Lead, SiteContent } from '../types';

interface ContactFormProps {
  onAddLead: (lead: Omit<Lead, 'id' | 'date' | 'status'>) => void;
  siteContent: SiteContent;
  defaultService?: string;
}

interface FormValues {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  serviceRequired: string;
  customService?: string;
  message: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onAddLead, siteContent, defaultService = '' }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialValues: FormValues = {
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    serviceRequired: defaultService,
    customService: '',
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
    { value: 'other', label: 'Other (Please specify)' },
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

    if (values.emailAddress.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.emailAddress)) {
      errors.emailAddress = 'Please enter a valid email address';
    }

    if (!values.serviceRequired) {
      errors.serviceRequired = 'Please select a service';
    } else if (values.serviceRequired === 'other' && (!values.customService || !values.customService.trim())) {
      errors.customService = 'Please specify the service';
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
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // Dispatch real email using EmailJS REST API
            const serviceId = siteContent.emailJsServiceId || "service_da90y1f";
            const templateId = siteContent.emailJsTemplateId || "template_duw9vib";
            const publicKey = siteContent.emailJsPublicKey || "jgH-WK7Q3_5LHQQ11";

            const selectedServiceLabel = values.serviceRequired === 'other'
              ? `Other: ${values.customService || ''}`
              : (servicesList.find((s) => s.value === values.serviceRequired)?.label || values.serviceRequired);

            const emailJsPayload = {
              service_id: serviceId,
              template_id: templateId,
              user_id: publicKey,
              template_params: {
                to_email: "mangodigitalgrowth@gmail.com",
                fullName: values.fullName,
                email: values.emailAddress,
                phone: values.mobileNumber,
                companyName: siteContent.companyName,
                message: values.message || 'No custom message provided.',
                serviceRequired: selectedServiceLabel,
                companyEmail: siteContent.companyEmail || "mangodigitalgrowth@gmail.com",
                companyWebsite: siteContent.companyWebsite || "www.mangodigitalgrowth.com"
              }
            };

            console.log("Sending EmailJS payload:", JSON.stringify(emailJsPayload, null, 2));

            try {
              const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(emailJsPayload)
              });

              if (res.ok) {
                console.log("EmailJS dispatch success!");
              } else {
                const errorText = await res.text();
                console.error(`EmailJS error ${res.status}: ${errorText}`);
                alert(`Email sending failed: ${errorText}. Please try again or contact us directly.`);
              }
            } catch (err) {
              console.error("EmailJS dispatch error:", err);
              alert("Email sending failed due to a network error. Please try again or contact us directly.");
            }

            const leadValues = {
              fullName: values.fullName,
              mobileNumber: values.mobileNumber,
              emailAddress: values.emailAddress,
              serviceRequired: values.serviceRequired === 'other' ? (values.customService || 'Other') : values.serviceRequired,
              message: values.message
            };

            onAddLead(leadValues);
            setSubmitting(false);
            setSubmitSuccess(true);
            resetForm();

            setTimeout(() => {
              setSubmitSuccess(false);
            }, 5000);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className="enquiry-form">
              <h3 className="form-heading">Send an Enquiry</h3>
              <p className="form-subheading">Get custom quotes and grow your business today.</p>

              <FormikInput
                label="Full Name"
                name="fullName"
                placeholder="e.g. Ramesh Naidu"
                disabled={isSubmitting}
                required
              />

              {/* Mobile Number & Email Address (Row) */}
              <div className="form-row">
                <div className="form-group col-6 phone-row-field">
                  <FormikPhoneInput
                    label="Mobile Number"
                    name="mobileNumber"
                    disabled={isSubmitting}
                    required
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

              <FormikInput
                label="Service Required"
                name="serviceRequired"
                as="select"
                disabled={isSubmitting}
                required
              >
                <option value="">Select a Digital Marketing Service</option>
                {servicesList.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </FormikInput>

              {values.serviceRequired === 'other' && (
                <FormikInput
                  label="Please Specify Service"
                  name="customService"
                  placeholder="Type the service you need..."
                  disabled={isSubmitting}
                  required
                />
              )}

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
