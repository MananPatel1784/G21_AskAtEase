import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Tag,
  Activity,
  Settings
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Users', href: '/admin/users', icon: Users },
  { name: 'Questions', href: '/admin/questions', icon: MessageSquare },
  { name: 'Tags', href: '/admin/tags', icon: Tag },
  { name: 'Activity Logs', href: '/admin/logs', icon: Activity },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-900">
      <div className="flex h-16 items-center justify-center">
        <h1 className="text-xl font-bold text-white">Ask at Ease Admin</h1>
      </div>
      <nav className="mt-6">
        <div className="space-y-1 px-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                )
              }
            >
              <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}