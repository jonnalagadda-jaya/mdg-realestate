import React from 'react';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import type { SiteContent } from '../types';

interface FooterProps {
  siteContent: SiteContent;
  setActivePage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ siteContent, setActivePage }) => {
  const handleQuickLink = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-accent"></div>
      <div className="footer-content-container">
        <div className="footer-grid">
          {/* Column 1: Company Profile */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img src="/mango-logo.png" alt="Mango Digital Growth Logo" className="footer-logo-img" />
            </div>
            <p className="footer-brand-desc">
              Empowering businesses to reach their maximum potential through custom, high-converting digital marketing campaigns and cutting-edge web development.
            </p>
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Instagram">
                <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="YouTube">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.021 0 12 0 12s0 3.979.502 5.837a3.002 3.002 0 0 0 2.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107c.502-1.858.502-5.837.502-5.837s0-3.979-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => handleQuickLink('home')}>
                  <ArrowRight size={14} className="link-arrow" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink('about')}>
                  <ArrowRight size={14} className="link-arrow" /> About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink('services')}>
                  <ArrowRight size={14} className="link-arrow" /> Services
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink('contact')}>
                  <ArrowRight size={14} className="link-arrow" /> Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleQuickLink('admin')}>
                  <ArrowRight size={14} className="link-arrow" /> Admin Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="footer-col contact-col">
            <h3 className="footer-col-title">Get in Touch</h3>
            <ul className="footer-contact-details">
              <li>
                <div className="contact-icon-wrapper">
                  <Phone size={16} />
                </div>
                <a href={`tel:+91${siteContent.phone}`} className="contact-link">
                  +91 {siteContent.phone}
                </a>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <Mail size={16} />
                </div>
                <a href="mailto:info@mangodigitalgrowth.com" className="contact-link">
                  info@mangodigitalgrowth.com
                </a>
              </li>
              <li className="address-li">
                <div className="contact-icon-wrapper">
                  <MapPin size={16} />
                </div>
                <span className="address-text">{siteContent.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Map Location */}
          <div className="footer-col map-col">
            <h3 className="footer-col-title">Our Location</h3>
            <div className="footer-map-container">
              <iframe
                title="Mango Digital Growth Location Map"
                src={siteContent.googleMapEmbed}
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Mango Digital Growth. All rights reserved.
          </p>
          <p className="footer-credits">
            Designed for Excellence | Driving Business Growth
          </p>
        </div>
      </div>
    </footer>
  );
};
