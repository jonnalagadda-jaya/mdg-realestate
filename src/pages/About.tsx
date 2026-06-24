import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import type { SiteContent } from '../types';
import { TEAM_MEMBERS_DATA } from '../constants';

interface AboutProps {
  siteContent: SiteContent;
  setActivePage: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ siteContent, setActivePage }) => {
  const values = [
    {
      title: 'Integrity First',
      desc: 'We prioritize honest reporting, transparent strategies, and building reliable organic search ranking metrics.',
      icon: ShieldCheck,
    },
    {
      title: 'Growth-Obsessed',
      desc: 'We align our KPIs with client revenue metrics. If our clients do not expand, we have not succeeded.',
      icon: Target,
    },
    {
      title: 'Client Partners',
      desc: 'We operate as an extension of your company, offering direct WhatsApp support and regular optimization updates.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="page-about fade-in">
      {/* Hero Banner / Introduction */}
      <section className="about-hero-section section-padding">
        <div className="section-container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <span className="badge">Our Agency Story</span>
              <h1>Empowering Businesses to Lead in the Digital Era</h1>
              <p className="about-lead-text">{siteContent.aboutText}</p>
              <div className="about-cta-container">
                <button className="btn btn-primary" onClick={() => setActivePage('contact')}>
                  Partner With Us
                </button>
              </div>
            </div>
            <div className="about-hero-visual">
              <div className="about-glow-orb"></div>
              <img src="/marketing-team.png" alt="Collaborative Mango Marketing Team" className="about-team-illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Split Cards */}
      <section className="vision-mission-section section-padding">
        <div className="section-container">
          <div className="vision-mission-grid">
            {/* Vision */}
            <div className="vision-card glass-card hover-glow">
              <div className="card-header-icon vision-icon-bg">
                <Eye size={24} className="card-icon" />
              </div>
              <h3>Our Vision</h3>
              <p>{siteContent.visionText}</p>
            </div>

            {/* Mission */}
            <div className="mission-card glass-card hover-glow">
              <div className="card-header-icon mission-icon-bg">
                <Compass size={24} className="card-icon" />
              </div>
              <h3>Our Mission</h3>
              <p>{siteContent.missionText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section section-padding">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="badge">Operational Values</span>
            <h2>Principles Behind Our Performance</h2>
            <p className="section-subtitle">
              We design sustainable marketing systems powered by ethical coding and transparent campaigns.
            </p>
          </div>
          <div className="values-grid">
            {values.map((val, index) => (
              <div key={index} className="value-card glass-card">
                <div className="value-icon-wrapper">
                  <val.icon size={26} className="value-icon" />
                </div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team Members */}
      <section className="team-section section-padding">
        <div className="section-container">
          <div className="section-header text-center">
            <span className="badge">Meet the Experts</span>
            <h2>Our Digital Marketing Strategists</h2>
            <p className="section-subtitle">
              Experienced professionals committed to planning, scaling, and managing your traffic campaigns.
            </p>
          </div>
          <div className="team-grid">
            {TEAM_MEMBERS_DATA.map((member) => (
              <div key={member.id} className="team-card glass-card">
                <div className="team-member-avatar-placeholder">
                  <span className="avatar-initials">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <div className="avatar-overlay-glow"></div>
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-role">{member.role}</span>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
