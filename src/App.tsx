import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { AdminPanel } from './pages/AdminPanel';

import type { Lead, SiteContent } from './types';
import { DEFAULT_SITE_CONTENT } from './constants';
import './App.css';

// Initial Mock Enquiries if DB is empty
const INITIAL_MOCK_LEADS: Lead[] = [
  {
    id: 'lead_1',
    fullName: 'Ramesh Naidu',
    mobileNumber: '6301972313',
    emailAddress: 'ramesh.naidu@gmail.com',
    serviceRequired: 'seo',
    message: 'I have a retail showroom in Tirupati and want to improve our local Google Maps ranking to attract nearby shoppers.',
    date: new Date(Date.now() - 36 * 3600 * 1000).toISOString(), // 36 hrs ago
    status: 'New'
  },
  {
    id: 'lead_2',
    fullName: 'Suhasini Reddy',
    mobileNumber: '9848022338',
    emailAddress: 'suhasini.r@outlook.com',
    serviceRequired: 'web-dev',
    message: 'We need a responsive, professional website designed for our organic mango distribution business in Peruru.',
    date: new Date(Date.now() - 72 * 3600 * 1000).toISOString(), // 72 hrs ago
    status: 'Contacted'
  }
];

function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<string>('');
  
  // Theme management state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('mango_theme');
    return (savedTheme as 'light' | 'dark') || 'light';
  });

  // Dynamic Site Copy / Info State
  const [siteContent, setSiteContent] = useState<SiteContent>(() => {
    const savedContent = localStorage.getItem('mango_site_content');
    return savedContent ? JSON.parse(savedContent) : DEFAULT_SITE_CONTENT;
  });

  // Leads Database State
  const [leads, setLeads] = useState<Lead[]>(() => {
    const savedLeads = localStorage.getItem('mango_leads');
    return savedLeads ? JSON.parse(savedLeads) : INITIAL_MOCK_LEADS;
  });

  // Logger console state
  const [logs, setLogs] = useState<string[]>([]);

  // Push log entry helper
  const addLog = (message: string) => {
    const timeString = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timeString}] ${message}`, ...prev]);
  };

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem('mango_leads', JSON.stringify(leads));
  }, [leads]);

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

  // Initial logs populate
  useEffect(() => {
    addLog('System initialized. Client Database successfully connected.');
    addLog(`Current configuration loaded: ${siteContent.companyName}.`);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    addLog(`Theme changed by administrator to: ${nextTheme.toUpperCase()} mode.`);
  };

  // Content update from admin panel
  const updateSiteContent = (newContent: SiteContent) => {
    setSiteContent(newContent);
    addLog('Site text content updated dynamically. Changes applied instantly across client pages.');
  };

  // Add a new Lead submission
  const handleAddLead = (leadData: Omit<Lead, 'id' | 'date' | 'status'>) => {
    const newLead: Lead = {
      ...leadData,
      id: `lead_${Date.now()}`,
      date: new Date().toISOString(),
      status: 'New',
    };

    setLeads((prev) => [newLead, ...prev]);
    
    // Trigger simulated logs for database and mail operations
    addLog(`NEW ENQUIRY RECEIVED: Client ${newLead.fullName} requested service: ${newLead.serviceRequired.toUpperCase()}.`);
    addLog(`DATABASE: Stored Lead record [ID: ${newLead.id}] to Local Browser Database successfully.`);
    addLog(`SMTP: Dispatched notification email to info@mangodigitalgrowth.com (From: ${newLead.emailAddress}, Mobile: ${newLead.mobileNumber}).`);
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
      case 'admin':
        return (
          <AdminPanel
            leads={leads}
            setLeads={setLeads}
            siteContent={siteContent}
            updateSiteContent={updateSiteContent}
            logs={logs}
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
