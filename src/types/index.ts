export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

export interface MenuItem {
  title: string;
  icon: string;
  path?: string;
  submenu?: MenuItem[];
}