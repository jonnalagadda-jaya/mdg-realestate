import React, { useState } from 'react';
import { ShieldAlert, LogOut, Check, Download, Save, Terminal, Trash2 } from 'lucide-react';
import type { Lead, SiteContent } from '../types';

interface AdminPanelProps {
  leads: Lead[];
  setLeads: React.Dispatch<React.SetStateAction<Lead[]>>;
  siteContent: SiteContent;
  updateSiteContent: (newContent: SiteContent) => void;
  logs: string[];
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  leads,
  setLeads,
  siteContent,
  updateSiteContent,
  logs,
}) => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Editable settings fields state
  const [editContent, setEditContent] = useState<SiteContent>({ ...siteContent });
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Handle Simple Authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid passcode. Use default passcode: admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode('');
  };

  // Update a Lead Status
  const handleStatusChange = (leadId: string, newStatus: Lead['status']) => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) =>
        lead.id === leadId ? { ...lead, status: newStatus } : lead
      )
    );
  };

  // Delete a Lead
  const handleDeleteLead = (leadId: string) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== leadId));
    }
  };

  // Handle Edit Changes
  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save Settings Changes
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteContent(editContent);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  // Export Leads to CSV
  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('No leads available to export!');
      return;
    }
    const headers = ['ID', 'Date', 'Full Name', 'Mobile', 'Email', 'Service Required', 'Message', 'Status'];
    const csvContent = [
      headers.join(','),
      ...leads.map((lead) =>
        [
          lead.id,
          `"${lead.date}"`,
          `"${lead.fullName.replace(/"/g, '""')}"`,
          `"${lead.mobileNumber}"`,
          `"${lead.emailAddress}"`,
          `"${lead.serviceRequired}"`,
          `"${lead.message.replace(/"/g, '""')}"`,
          lead.status,
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'mango_digital_growth_leads.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Leads list
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.emailAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.mobileNumber.includes(searchTerm) ||
      lead.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Render Login Panel
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper fade-in">
        <div className="login-card glass-card text-center">
          <div className="login-header-icon">
            <ShieldAlert size={36} />
          </div>
          <h2>Admin Authentication</h2>
          <p className="login-subtitle">
            Access secure client database and configure homepage copy.
          </p>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="passcode">Enter Passcode</label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Hint: admin123"
                className={loginError ? 'error-input' : ''}
                autoFocus
              />
              {loginError && <span className="error-text">{loginError}</span>}
            </div>

            <button type="submit" className="btn btn-primary login-btn">
              Unlock Dashboard
            </button>
          </form>
          <div className="login-disclaimer">
            <span>Secure connection active. Content adjustments persist locally.</span>
          </div>
        </div>
      </div>
    );
  }

  // Calculate Metrics
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === 'New').length;
  const contactedLeads = leads.filter((l) => l.status === 'Contacted').length;
  const inProgressLeads = leads.filter((l) => l.status === 'In Progress').length;
  const closedLeads = leads.filter((l) => l.status === 'Closed').length;

  return (
    <div className="page-admin fade-in">
      {/* Header bar */}
      <section className="admin-header-bar">
        <div className="admin-bar-container">
          <div className="admin-title-area">
            <span className="badge badge-success">Live Management Mode</span>
            <h2>Mango Digital Growth Console</h2>
          </div>
          <button className="btn btn-outline btn-logout" onClick={handleLogout}>
            <LogOut size={16} style={{ marginRight: '6px' }} /> Log Out Console
          </button>
        </div>
      </section>

      {/* Overview stats cards */}
      <section className="admin-stats-section">
        <div className="admin-stats-grid">
          <div className="metric-card glass-card">
            <span className="metric-label">Total Enquiries</span>
            <span className="metric-value">{totalLeads}</span>
          </div>
          <div className="metric-card glass-card border-left-new">
            <span className="metric-label">New Leads</span>
            <span className="metric-value font-new">{newLeads}</span>
          </div>
          <div className="metric-card glass-card border-left-contacted">
            <span className="metric-label">In Contact</span>
            <span className="metric-value font-contacted">{contactedLeads + inProgressLeads}</span>
          </div>
          <div className="metric-card glass-card border-left-closed">
            <span className="metric-label">Closed Success</span>
            <span className="metric-value font-closed">{closedLeads}</span>
          </div>
        </div>
      </section>

      {/* Main split: Leads Table and Content Settings Form */}
      <section className="admin-split-section">
        <div className="admin-split-grid">
          {/* Left Block: Lead Management */}
          <div className="admin-leads-manager glass-card">
            <div className="panel-header">
              <h3>Client Inquiries Database</h3>
              <button className="btn btn-outline btn-export" onClick={handleExportCSV}>
                <Download size={14} style={{ marginRight: '6px' }} /> Export CSV
              </button>
            </div>

            {/* Filter controls */}
            <div className="table-controls">
              <input
                type="text"
                placeholder="Search name, email, message..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="status-filter-select"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            {/* Leads Table */}
            <div className="leads-table-wrapper">
              {filteredLeads.length === 0 ? (
                <div className="empty-table-state">
                  <p>No client inquiries match the selection criteria.</p>
                </div>
              ) : (
                <table className="leads-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Client Info</th>
                      <th>Requested Service</th>
                      <th>Enquiry Message</th>
                      <th>Status Action</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className={`status-row-${lead.status.toLowerCase().replace(' ', '-')}`}>
                        <td className="col-date">{new Date(lead.date).toLocaleDateString()}</td>
                        <td className="col-client">
                          <div className="client-name">{lead.fullName}</div>
                          <div className="client-meta">
                            <a href={`tel:+91${lead.mobileNumber}`}>{lead.mobileNumber}</a>
                            <br />
                            <a href={`mailto:${lead.emailAddress}`}>{lead.emailAddress}</a>
                          </div>
                        </td>
                        <td className="col-service">
                          <span className="badge badge-service">{lead.serviceRequired}</span>
                        </td>
                        <td className="col-msg">
                          <div className="message-container-p">{lead.message}</div>
                        </td>
                        <td className="col-status">
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              handleStatusChange(lead.id, e.target.value as Lead['status'])
                            }
                            className={`status-updater select-${lead.status.toLowerCase().replace(' ', '-')}`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="col-delete-action">
                          <button
                            className="delete-lead-btn"
                            onClick={() => handleDeleteLead(lead.id)}
                            title="Delete Lead"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Right Block: Content Manager Settings */}
          <div className="admin-content-manager glass-card">
            <div className="panel-header">
              <h3>Homepage Content Updates</h3>
              {saveSuccess && (
                <span className="save-success-tag">
                  <Check size={14} style={{ marginRight: '4px' }} /> Saved Successfully
                </span>
              )}
            </div>

            <form onSubmit={handleSaveSettings} className="settings-form">
              {/* Hero Title */}
              <div className="form-group">
                <label htmlFor="heroHeading">Hero Section Title</label>
                <input
                  type="text"
                  id="heroHeading"
                  name="heroHeading"
                  value={editContent.heroHeading}
                  onChange={handleEditChange}
                  required
                />
              </div>

              {/* Hero Subtitle */}
              <div className="form-group">
                <label htmlFor="heroSubheading">Hero Section Subtitle</label>
                <textarea
                  id="heroSubheading"
                  name="heroSubheading"
                  rows={3}
                  value={editContent.heroSubheading}
                  onChange={handleEditChange}
                  required
                ></textarea>
              </div>

              {/* Call Number & WhatsApp (Row) */}
              <div className="form-row">
                <div className="form-group col-6">
                  <label htmlFor="phone">Contact Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={editContent.phone}
                    onChange={handleEditChange}
                    required
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="whatsapp">WhatsApp Number (e.g. 916301972313)</label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    value={editContent.whatsapp}
                    onChange={handleEditChange}
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="form-group">
                <label htmlFor="address">Physical Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={editContent.address}
                  onChange={handleEditChange}
                  required
                />
              </div>

              {/* Map link */}
              <div className="form-group">
                <label htmlFor="googleMapEmbed">Google Maps Iframe Embed Source URL</label>
                <input
                  type="text"
                  id="googleMapEmbed"
                  name="googleMapEmbed"
                  value={editContent.googleMapEmbed}
                  onChange={handleEditChange}
                  required
                />
              </div>

              {/* Youtube video URL */}
              <div className="form-group">
                <label htmlFor="videoUrl">Center Video Embed URL</label>
                <input
                  type="text"
                  id="videoUrl"
                  name="videoUrl"
                  value={editContent.videoUrl}
                  onChange={handleEditChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-save">
                <Save size={16} style={{ marginRight: '6px' }} /> Save Dynamic Copy
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Block: System Logs console */}
      <section className="admin-logs-section">
        <div className="admin-logs-card glass-card">
          <div className="panel-header">
            <h3>
              <Terminal size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Form Actions & Server Logs
            </h3>
          </div>
          <div className="logs-terminal">
            {logs.map((log, index) => (
              <div key={index} className="log-line">
                <span className="log-prompt">&gt;</span> {log}
              </div>
            ))}
            <div className="log-line log-blinking">
              <span className="log-prompt">&gt;</span> Listening for form submissions...
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
