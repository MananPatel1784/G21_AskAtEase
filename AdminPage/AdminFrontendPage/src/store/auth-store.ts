import { create } from 'zustand';
import { MOCK_ADMIN } from '../lib/mock-data';

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    // Mock authentication logic
    if (email === 'admin@askatease.com' && password === 'admin123') {
      set({ isAuthenticated: true, user: MOCK_ADMIN });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));