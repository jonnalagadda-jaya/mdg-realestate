import React from 'react';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import type { SiteContent } from '../types';
import { ContactForm } from '../components/ContactForm';

interface ContactProps {
  siteContent: SiteContent;
  onAddLead: (lead: any) => void;
  selectedService: string;
}

export const Contact: React.FC<ContactProps> = ({ siteContent, onAddLead, selectedService }) => {
  return (
    <div className="page-contact fade-in">
      <section className="contact-banner section-padding">
        <div className="section-container text-center">
          <span className="badge">Get in Touch</span>
          <h1>Let's Discuss Your Growth Strategy</h1>
          <p className="contact-lead-text max-w-2xl mx-auto">
            Have questions about our SEO plans, custom development budgets, or paid ad targets? Fill out the enquiry form or ping us directly on WhatsApp for an instant response.
          </p>
        </div>
      </section>

      <section className="contact-body-section section-padding">
        <div className="section-container">
          <div className="contact-split-grid">
            {/* Left Column: Details & Map */}
            <div className="contact-info-panel">
              <h2>Contact Information</h2>
              <p className="panel-desc">
                Reach out to us directly through any of the channels below. We are available Monday to Saturday.
              </p>

              <div className="contact-cards-list">
                {/* Phone Call Card */}
                <div className="info-card-item glass-card">
                  <div className="info-card-icon call-bg">
                    <Phone size={20} />
                  </div>
                  <div className="info-card-details">
                    <h4>Direct Call</h4>
                    <a href={`tel:+91${siteContent.phone}`}>+91 {siteContent.phone}</a>
                    <span className="card-sub-info">Available 9:00 AM - 7:00 PM</span>
                  </div>
                </div>

                {/* WhatsApp Chat Card */}
                <div className="info-card-item glass-card">
                  <div className="info-card-icon wa-bg">
                    <MessageSquare size={20} />
                  </div>
                  <div className="info-card-details">
                    <h4>WhatsApp Chat</h4>
                    <a
                      href={`https://wa.me/${siteContent.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat Now with Specialists
                    </a>
                    <span className="card-sub-info">Typically replies in 15 mins</span>
                  </div>
                </div>

                {/* Office Location Card */}
                <div className="info-card-item glass-card">
                  <div className="info-card-icon loc-bg">
                    <MapPin size={20} />
                  </div>
                  <div className="info-card-details">
                    <h4>Our Office Location</h4>
                    <span className="loc-text">{siteContent.address}</span>
                  </div>
                </div>

                {/* Work Hours Card */}
                <div className="info-card-item glass-card">
                  <div className="info-card-icon hours-bg">
                    <Clock size={20} />
                  </div>
                  <div className="info-card-details">
                    <h4>Business Hours</h4>
                    <span>Monday - Saturday: 9:00 AM - 7:00 PM</span>
                    <span>Sunday: Closed</span>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="contact-map-wrapper glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=4-73%2F6%2C+RNR+Nagar%2C+Haripuram+Colony%2C+Peruru%2C+Tirupati%2C+Andhra+Pradesh+-+517505"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'block', position: 'relative', cursor: 'pointer', width: '100%', height: '100%' }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5 }}></div>
                  <iframe
                    title="Google Maps Location for Mango Digital Growth"
                    src={siteContent.googleMapEmbed}
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '8px', pointerEvents: 'none', display: 'block' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-panel">
              <ContactForm onAddLead={onAddLead} siteContent={siteContent} defaultService={selectedService} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
