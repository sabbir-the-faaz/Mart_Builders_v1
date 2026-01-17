
export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  scope: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  category: 'Infrastructure' | 'Building' | 'Consultancy';
  imageUrl: string;
}

export interface Tender {
  id: string;
  title: string;
  authority: string;
  issueDate: string;
  closingDate: string;
  status: 'Active' | 'Past' | 'Upcoming';
  referenceNo: string;
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  deadline: string;
  type: 'Full-time' | 'Contract';
}
