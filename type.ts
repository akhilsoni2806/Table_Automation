export interface NavItem {
  label: string;
  path: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
