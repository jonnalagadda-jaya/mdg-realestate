import React, { useState } from 'react';
import { Search, TrendingUp, Share2, Code, MapPin, Cpu, FileText, Award, Sliders, BarChart2, DollarSign, CheckCircle, ArrowRight, Star, Quote } from 'lucide-react';
import type { SiteContent } from '../types';
import { SERVICES_DATA, WHY_CHOOSE_US_DATA, TESTIMONIALS_DATA } from '../constants';
import { ContactForm } from '../components/ContactForm';

// Dynamic Icon Mapper
const IconMapper: React.FC<{ name: string; size?: number; className?: string }> = ({
  name,
  size = 24,
  className = '',
}) => {
  const iconMap: Record<string, any> = {
    Search,
    TrendingUp,
    Share2,
    Code,
    MapPin,
    Cpu,
    FileText,
    Award,
    Sliders,
    BarChart: BarChart2,
    DollarSign,
    CheckCircle,
  };

  const Component = iconMap[name] || CheckCircle;
  return <Component size={size} className={className} />;
};

interface HomeProps {
  siteContent: SiteContent;
  setActivePage: (page: string) => void;
  onAddLead: (lead: any) => void;
}

export const Home: React.FC<HomeProps> = ({ siteContent, setActivePage, onAddLead }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleServiceClick = (serviceId: string) => {
    setActivePage('services');
    setTimeout(() => {
      const element = document.getElementById(`service-section-${serviceId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <div className="page-home fade-in">
      {/* 1. Hero Banner */}
      <section className="hero-section hero-bg-video-section">
        <video
          className="hero-bg-video"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="hero-bg-overlay"></div>
        
        <div className="hero-content centered-hero-content">
          <span className="badge">Digital Growth Accelerator</span>
          <h1 className="hero-title">{siteContent.heroHeading}</h1>
          <p className="hero-subtitle">{siteContent.heroSubheading}</p>
          <div className="hero-cta-buttons">
            <button className="btn btn-primary" onClick={() => setActivePage('contact')}>
              Contact Us Now
            </button>
            <a
              href={`https://wa.me/${siteContent.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-cta"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Company Introduction */}
      <section className="intro-section section-padding">
        <div className="section-container">
          <div className="intro-card glass-card">
            <div className="intro-badge">Who We Are</div>
            <h2>Pioneering Your Brand's Digital Journey</h2>
            <p className="intro-desc">{siteContent.aboutText}</p>
            <button className="btn btn-outline" onClick={() => setActivePage('about')}>
              Learn More About Us <ArrowRight size={16} style={{ marginLeft: '6px' }} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Center Video Section */}
      <section className="video-section section-padding">
        <div className="section-container text-center">
          <span className="badge">Video Insight</span>
          <h2 className="section-title">See How Mango Digital Growth Helps Businesses Grow</h2>
          <p className="section-subtitle max-w-2xl">
            Watch our introduction video to learn how our digital marketing services help businesses attract customers, improve online presence, and achieve sustainable growth.
          </p>
          <div className="video-player-container glass-card">
            <div className="video-aspect-ratio">
              {siteContent.videoUrl.endsWith('.mp4') || siteContent.videoUrl.includes('/video.mp4') ? (
                <video
                  src={siteContent.videoUrl}
                  controls
                  className="hero-video-player"
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, border: 'none' }}
                ></video>
              ) : (
                <iframe
                  title="Mango Digital Growth Introduction Video"
                  src={siteContent.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="services-overview-section section-padding">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="badge">Our Expertise</span>
            <h2>Services That Drive High Conversions</h2>
            <p className="section-subtitle">
              We design, build, and optimize custom search and social strategies that turn clicks into clients.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES_DATA.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="service-card glass-card hover-glow"
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="service-card-icon-wrapper">
                  <IconMapper name={service.icon} size={28} className="service-card-icon" />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.shortDesc}</p>
                <span className="card-action-link">
                  Learn Details <ArrowRight size={14} className="card-arrow" />
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="btn btn-outline" onClick={() => setActivePage('services')}>
              View All 7 Growth Services
            </button>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="why-choose-us-section section-padding">
        <div className="section-container">
          <div className="why-choose-us-grid">
            <div className="why-choose-us-content">
              <span className="badge">Why Choose Us</span>
              <h2>A Result-Focused Digital Partner</h2>
              <p className="section-description mb-8">
                At Mango Digital Growth, we do not believe in superficial rankings or click metrics. We focus on real commercial indicators—qualified leads, actual enquiries, and consistent revenue streams.
              </p>
              <div className="why-points-list">
                {WHY_CHOOSE_US_DATA.map((item) => (
                  <div key={item.id} className="why-point-item">
                    <div className="why-point-icon-wrapper">
                      <IconMapper name={item.icon} size={20} className="why-point-icon" />
                    </div>
                    <div className="why-point-details">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-choose-us-visual">
              <div className="why-visual-glow"></div>
              <div className="why-stats-card glass-card">
                <span className="stats-number">100%</span>
                <span className="stats-label">Client Focus</span>
              </div>
              <div className="why-stats-card2 glass-card">
                <span className="stats-number">24/7</span>
                <span className="stats-label">Growth Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="testimonials-section section-padding">
        <div className="section-container text-center">
          <span className="badge">Client Reviews</span>
          <h2 className="section-title">What Our Clients Say About Us</h2>
          <p className="section-subtitle max-w-2xl">
            Read positive feedback from real business owners who achieved top search rankings and scalable lead flows with our support.
          </p>

          <div className="testimonials-carousel-container">
            <div className="testimonial-slider glass-card">
              <Quote className="quote-icon" size={48} />
              <p className="testimonial-quote">
                "{TESTIMONIALS_DATA[activeTestimonial].quote}"
              </p>
              <div className="testimonial-stars">
                {[...Array(TESTIMONIALS_DATA[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="star-icon" />
                ))}
              </div>
              <h4 className="testimonial-author">{TESTIMONIALS_DATA[activeTestimonial].name}</h4>
              <span className="testimonial-role">{TESTIMONIALS_DATA[activeTestimonial].role}</span>

              {/* Slider Dots */}
              <div className="slider-dots">
                {TESTIMONIALS_DATA.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${activeTestimonial === index ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact Form Section */}
      <section className="home-contact-section section-padding">
        <div className="section-container">
          <div className="home-contact-grid">
            <div className="home-contact-details">
              <span className="badge">Start Growing</span>
              <h2>Ready to Skyrocket Your Online Leads?</h2>
              <p className="contact-details-intro">
                Fill out the contact form, select your target digital service, and we will prepare a complete structural audit and traffic campaign outline for your review.
              </p>
              <div className="contact-quick-info">
                <div className="info-block">
                  <h5>Call Us Directly</h5>
                  <a href={`tel:+91${siteContent.phone}`}>+91 {siteContent.phone}</a>
                </div>
                <div className="info-block">
                  <h5>Visit Haripuram Colony</h5>
                  <span>{siteContent.address}</span>
                </div>
              </div>
            </div>
            <div className="home-contact-form-wrapper">
              <ContactForm onAddLead={onAddLead} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
