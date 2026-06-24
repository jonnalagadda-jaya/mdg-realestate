export interface Lead {
  id: string;
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  serviceRequired: string;
  message: string;
  date: string;
  status: 'New' | 'Contacted' | 'In Progress' | 'Closed';
}

export interface SiteContent {
  companyName: string;
  phone: string;
  whatsapp: string;
  address: string;
  googleMapEmbed: string;
  heroHeading: string;
  heroSubheading: string;
  videoUrl: string;
  aboutText: string;
  visionText: string;
  missionText: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  benefits: string[];
  icon: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  role: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}
