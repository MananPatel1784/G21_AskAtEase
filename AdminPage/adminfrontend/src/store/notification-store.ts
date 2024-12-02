import { create } from 'zustand';
import axios from 'axios';
import { Notification } from '../types';

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  fetchNotifications: () => Promise<void>;
  markAsRead: (id: string) => void;
}

const mockNotifications = [
  {
    id: '1',
    title: 'New Question',
    message: 'A new question was posted in the React space',
    read: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'User Report',
    message: 'A user reported inappropriate content',
    read: false,
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
];

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  unreadCount: 0,
  fetchNotifications: async () => {
    try {
      // Using mock data until backend is ready
      set({
        notifications: mockNotifications,
        unreadCount: mockNotifications.filter(n => !n.read).length,
      });
    } catch (error) {
      console.error('Error fetching notifications:', error);
      // Fallback to empty state
      set({ notifications: [], unreadCount: 0 });
    }
  },
  markAsRead: async (id: string) => {
    try {
      // Mock API call
      set((state) => ({
        notifications: state.notifications.map((n) =>
          n.id === id ? { ...n, read: true } : n
        ),
        unreadCount: state.unreadCount > 0 ? state.unreadCount - 1 : 0,
      }));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  },
}));
