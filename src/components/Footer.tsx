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
              <a href="https://www.instagram.com/mango_digital_growth/" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Instagram">
                <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="https://www.youtube.com/watch?v=unbN4oN0zzI" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="YouTube">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.021 0 12 0 12s0 3.979.502 5.837a3.002 3.002 0 0 0 2.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107c.502-1.858.502-5.837.502-5.837s0-3.979-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://x.com/Mangodigitalgro" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Twitter">
                <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="LinkedIn">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="social-icon-wrapper" aria-label="Pinterest">
                <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.4 7.63 11.13-.1-.95-.2-2.4.04-3.43.22-.93 1.4-5.93 1.4-5.93s-.36-.72-.36-1.77c0-1.66.96-2.9 2.17-2.9 1.02 0 1.51.77 1.51 1.69 0 1.03-.65 2.57-.99 4c-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86-3.4 0-5.4 2.56-5.4 5.2 0 1.03.4 2.14.9 2.74.1.12.11.23.08.35-.1.39-.31 1.25-.35 1.42-.05.23-.18.28-.4.18-1.5-.7-2.43-2.9-2.43-4.66 0-3.8 2.76-7.3 7.97-7.3 4.18 0 7.43 2.98 7.43 6.96 0 4.16-2.62 7.5-6.26 7.5-1.22 0-2.37-.63-2.76-1.38l-.75 2.85c-.27 1.04-1 2.35-1.5 3.16 1.12.35 2.3.54 3.53.54 6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>
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
                <a href="mailto:mangodigitalgrowth@gmail.com" className="contact-link">
                  mangodigitalgrowth@gmail.com
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
            <div className="footer-map-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=4-73%2F6%2C+RNR+Nagar%2C+Haripuram+Colony%2C+Peruru%2C+Tirupati%2C+Andhra%20Pradesh+-+517505"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', position: 'relative', cursor: 'pointer', width: '100%', height: '100%' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5 }}></div>
                <iframe
                  title="Mango Digital Growth Location Map"
                  src={siteContent.googleMapEmbed}
                  width="100%"
                  height="150"
                  style={{ border: 0, borderRadius: '8px', pointerEvents: 'none', display: 'block' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </a>
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
