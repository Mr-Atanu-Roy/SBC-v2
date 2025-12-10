
export type PageType = 'home' | 'enquiry';

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface DropdownItem {
  label: string;
  href: string;
}

export interface ClassCardProps {
  grade: string;
  description: string;
  icon: React.ReactNode;
}

export interface CourseProps {
  subject: string;
  level: string;
  image: string;
  tags: string[];
  price: string;
  classGrade: string;
  board: string;
}

export interface FacultyProps {
  name: string;
  role: string;
  subject: string;
  image: string;
  experience: string;
}