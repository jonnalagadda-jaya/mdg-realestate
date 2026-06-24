import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import type { SiteContent } from '../types';

interface FloatingButtonsProps {
  siteContent: SiteContent;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ siteContent }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floating-actions-container">
      {/* Call Button (Bottom Left) */}
      <a
        href={`tel:+91${siteContent.phone}`}
        className="floating-btn floating-call-btn"
        title="Call Us Now"
        aria-label="Call company"
      >
        <span className="pulse-ring"></span>
        <Phone size={24} />
      </a>

      {/* WhatsApp Button (Bottom Right) */}
      <a
        href={`https://wa.me/${siteContent.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp-btn"
        title="WhatsApp Us Now"
        aria-label="WhatsApp chat"
      >
        <span className="pulse-ring"></span>
        <MessageSquare size={24} />
      </a>

      {/* Scroll to Top (Above WhatsApp on Right) */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};
