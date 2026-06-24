import React from 'react';
import { Search, TrendingUp, Share2, Code, MapPin, Cpu, FileText, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../constants';

// Dynamic Icon Mapper
const IconMapper: React.FC<{
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}> = ({ name, size = 24, className = '', style }) => {
  const iconMap: Record<string, any> = {
    Search,
    TrendingUp,
    Share2,
    Code,
    MapPin,
    Cpu,
    FileText,
  };

  const Component = iconMap[name] || Search;
  return <Component size={size} className={className} style={style} />;
};

interface ServicesProps {
  setActivePage: (page: string) => void;
  setSelectedService: (service: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setActivePage, setSelectedService }) => {
  const handleHireClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setActivePage('contact');
    setTimeout(() => {
      const formElement = document.getElementById('fullName');
      if (formElement) {
        formElement.focus();
      }
    }, 100);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`service-section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="page-services fade-in">
      {/* Banner */}
      <section className="services-banner section-padding">
        <div className="section-container text-center">
          <span className="badge">Service Catalog</span>
          <h1>Comprehensive Marketing & Technology Services</h1>
          <p className="services-lead-text max-w-3xl mx-auto">
            From technical search ranking strategies to full-stack website builds and automation scripts, we deploy custom digital campaigns geared towards high-intent traffic acquisition.
          </p>

          {/* Quick jump nav bar */}
          <div className="services-quick-nav glass-card">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className="quick-nav-btn"
              >
                <IconMapper name={service.icon} size={14} style={{ marginRight: '6px' }} />
                {service.title.split(' (')[0].split(' Management')[0]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Sections */}
      <section className="services-list-section section-padding">
        <div className="section-container">
          <div className="services-list-grid">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={`service-section-${service.id}`}
                  className={`service-detail-block glass-card ${isEven ? 'layout-normal' : 'layout-reverse'}`}
                >
                  <div className="service-detail-visual">
                    <div className="service-icon-banner">
                      <IconMapper name={service.icon} size={48} className="service-icon" />
                    </div>
                    <div className="service-glow-effect"></div>
                  </div>

                  <div className="service-detail-content">
                    <span className="service-index-number">0{index + 1}</span>
                    <h2 className="service-detail-title">{service.title}</h2>
                    <p className="service-detail-desc">{service.longDesc}</p>

                    <div className="service-details-split">
                      {/* Features */}
                      <div className="details-col">
                        <h4>Key Features</h4>
                        <ul className="details-checklist">
                          {service.features.map((feat, i) => (
                            <li key={i}>
                              <CheckCircle2 size={16} className="checklist-icon feature-check" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="details-col">
                        <h4>Key Benefits</h4>
                        <ul className="details-checklist">
                          {service.benefits.map((ben, i) => (
                            <li key={i}>
                              <CheckCircle2 size={16} className="checklist-icon benefit-check" />
                              <span>{ben}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="service-action-container">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleHireClick(service.id)}
                      >
                        Inquire About {service.title.split(' (')[0]}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
