import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';


import type { Lead, SiteContent } from './types';
import { DEFAULT_SITE_CONTENT } from './constants';
import './App.css';



function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  
  // Theme management state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('mango_theme');
    return (savedTheme as 'light' | 'dark') || 'light';
  });

  // Dynamic Site Copy / Info State
  const [siteContent] = useState<SiteContent>(() => {
    const savedContent = localStorage.getItem('mango_site_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        // Force-migrate template keyholders to user's real credentials if placeholder remains
        if (parsed.emailJsServiceId === 'service_u9vip0a' || parsed.emailJsPublicKey === 'user_u8d4k3m') {
          parsed.emailJsServiceId = DEFAULT_SITE_CONTENT.emailJsServiceId;
          parsed.emailJsPublicKey = DEFAULT_SITE_CONTENT.emailJsPublicKey;
          parsed.emailJsTemplateId = DEFAULT_SITE_CONTENT.emailJsTemplateId;
          localStorage.setItem('mango_site_content', JSON.stringify(parsed));
        }
        return parsed;
      } catch (e) {
        console.error("Failed to parse site content from localStorage", e);
      }
    }
    return DEFAULT_SITE_CONTENT;
  });





  useEffect(() => {
    localStorage.setItem('mango_site_content', JSON.stringify(siteContent));
  }, [siteContent]);

  useEffect(() => {
    localStorage.setItem('mango_theme', theme);
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  // Add a new Lead submission
  const handleAddLead = (leadData: Omit<Lead, 'id' | 'date' | 'status'>) => {
    const newLead: Lead = {
      ...leadData,
      id: `lead_${Date.now()}`,
      date: new Date().toISOString(),
      status: 'New',
    };
    console.log('Lead registered:', newLead);
  };

  // Render the current Page view
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home
            siteContent={siteContent}
            setActivePage={setActivePage}
            onAddLead={handleAddLead}
          />
        );
      case 'about':
        return <About siteContent={siteContent} setActivePage={setActivePage} />;
      case 'services':
        return (
          <Services
            setActivePage={setActivePage}
            setSelectedService={setSelectedService}
          />
        );
      case 'contact':
        return (
          <Contact
            siteContent={siteContent}
            onAddLead={handleAddLead}
            selectedService={selectedService}
          />
        );

      default:
        return (
          <Home
            siteContent={siteContent}
            setActivePage={setActivePage}
            onAddLead={handleAddLead}
          />
        );
    }
  };

  return (
    <>
      {/* Header bar navigation */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main rendering viewport */}
      <main className="main-content">{renderPage()}</main>

      {/* Footer bar */}
      <Footer siteContent={siteContent} setActivePage={setActivePage} />

      {/* Floating quick contacts */}
      <FloatingButtons siteContent={siteContent} />
    </>
  );
}

export default App;
