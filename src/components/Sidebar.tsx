import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Settings,
  Users,
  Shield,
  Lock,
  Users as ClientsIcon,
  ShoppingCart,
  CreditCard,
  ChevronDown,
  ChevronRight,
  Menu,
} from 'lucide-react';

interface MenuItemProps {
  to?: string;
  icon: React.ReactNode;
  label: string;
  children?: React.ReactNode;
  collapsed: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, icon, label, children, collapsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (children) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full menu-item"
        >
          <span className="menu-icon">{icon}</span>
          {!collapsed && (
            <>
              <span className="ml-3">{label}</span>
              <span className="ml-auto">
                {isOpen ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </span>
            </>
          )}
        </button>
        {isOpen && !collapsed && <div className="pl-4">{children}</div>}
      </div>
    );
  }

  return (
    <NavLink
      to={to || '#'}
      className={({ isActive }) =>
        `menu-item ${isActive ? 'active' : ''}`
      }
    >
      <span className="menu-icon">{icon}</span>
      {!collapsed && <span className="ml-3">{label}</span>}
    </NavLink>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar-transition ${collapsed ? 'w-16' : 'w-64'} bg-sidebar shadow-lg flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b border-gray-100">
        {!collapsed && <h1 className="text-xl font-bold text-gray-800">Portal</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={20} />
        </button>
      </div>
      <nav className="mt-4 flex-1 space-y-1 px-2">
        <MenuItem to="/dashboard" icon={<Home size={20} />} label="Inicio" collapsed={collapsed} />
        
        <MenuItem icon={<Settings size={20} />} label="Parámetros" collapsed={collapsed}>
          <MenuItem to="/parameters/users" icon={<Users size={20} />} label="Usuarios" collapsed={collapsed} />
          <MenuItem to="/parameters/roles" icon={<Shield size={20} />} label="Roles" collapsed={collapsed} />
          <MenuItem to="/parameters/permissions" icon={<Lock size={20} />} label="Permisos" collapsed={collapsed} />
        </MenuItem>

        <MenuItem icon={<ClientsIcon size={20} />} label="Clientes" collapsed={collapsed}>
          <MenuItem to="/clients/orders" icon={<ShoppingCart size={20} />} label="Pedidos" collapsed={collapsed} />
          <MenuItem to="/clients/payments" icon={<CreditCard size={20} />} label="Pagos" collapsed={collapsed} />
        </MenuItem>
      </nav>
    </div>
  );
};

export default Sidebar;