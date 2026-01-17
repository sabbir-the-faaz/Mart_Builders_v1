
import React from 'react';
import { Project, Tender, Career } from './types';

export const COMPANY_INFO = {
  name: 'MART BUILDERS',
  tagline: 'Developer, Consultant & Construction',
  address: 'Holy view, 2nd Floor, House No. 87, Road No: 1, Shamimabad, Sylhet, Bangladesh',
  phone: '01718787526, 01840929310',
  email: 'mizanoor000@gmail.com',
  workingHours: 'Sun - Thu: 09:00 AM - 05:00 PM',
  established: '2009',
  founder: 'Engr. M. A. Rashid',
  specialties: ['Infrastructure', 'High-rise Buildings', 'Government Tenders', 'Project Consultancy'],
};

export const TENDER_LICENSES = [
  'Education Sector Projects',
  'Roads & Highways Department (RHD)',
  'Electrical Works & Engineering',
  'Civil Engineering Works',
  'General Construction & Development'
];

export const AI_CONTEXT = `
You are the Official AI Assistant for MART BUILDERS, a premier government contractor in Bangladesh.
Your goal is to provide professional, concise, and accurate information to potential government partners, ministries, and engineers.

Company Profile:
- Name: ${COMPANY_INFO.name}
- Head Office: ${COMPANY_INFO.address}
- Established: ${COMPANY_INFO.established}
- Role: Developer, Consultant, and Construction service provider.
- Expertise: Government tenders (e-GP), infrastructure (highways, bridges), and administrative buildings.
- Tender License Categories: ${TENDER_LICENSES.join(', ')}.
- Key Clients: PWD, RHD, LGED, Ministry of Education, NHA.

Tone:
- Formal, authoritative, helpful, and transparent.
- Avoid marketing fluff. Stick to engineering and compliance facts.

Suggested Topics:
1. Details on recent projects (Administrative buildings, Highways).
2. Tender participation and compliance standards (ISO certified, PPR adherence).
3. Licensed domains (Education, Roads, Electrical, etc.).
4. Career opportunities for civil engineers.
5. Contact information and head office location in Sylhet.
`;

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Tenders', path: '/tenders' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Multi-Storied Administrative Building',
    client: 'Public Works Department (PWD)',
    location: 'Rajshahi, Bangladesh',
    scope: 'Structural construction, MEP works, and interior finishing.',
    status: 'Completed',
    category: 'Building',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p2',
    title: 'Regional Highway Expansion Project',
    client: 'Roads and Highways Department (RHD)',
    location: 'Comilla-Sylhet Segment',
    scope: '4-lane expansion, bridge construction, and culverts.',
    status: 'Ongoing',
    category: 'Infrastructure',
    imageUrl: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'p3',
    title: 'Institutional Complex Consultancy',
    client: 'Ministry of Education',
    location: 'Dhaka, Bangladesh',
    scope: 'Architectural design, feasibility study, and project management.',
    status: 'Completed',
    category: 'Consultancy',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
];

export const TENDERS: Tender[] = [
  {
    id: 't1',
    title: 'Construction of District Model Mosque',
    authority: 'Islamic Foundation Bangladesh',
    issueDate: '2024-05-10',
    closingDate: '2024-06-15',
    status: 'Active',
    referenceNo: 'IFB/2024/T-102',
  },
  {
    id: 't2',
    title: 'Maintenance of Government Quarters',
    authority: 'National Housing Authority',
    issueDate: '2024-04-01',
    closingDate: '2024-05-01',
    status: 'Past',
    referenceNo: 'NHA/MAIN/88-01',
  },
];

export const CAREERS: Career[] = [
  {
    id: 'c1',
    title: 'Senior Civil Engineer',
    department: 'Engineering',
    location: 'Sylhet (Head Office)',
    deadline: '2024-06-30',
    type: 'Full-time',
  },
  {
    id: 'c2',
    title: 'Project Manager',
    department: 'Operations',
    location: 'Project Site (Chittagong)',
    deadline: '2024-06-15',
    type: 'Contract',
  },
];
