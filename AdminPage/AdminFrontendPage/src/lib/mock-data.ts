// Mock admin user data
export const MOCK_ADMIN = {
  id: '1',
  name: 'Admin User',
  email: 'admin@askatease.com',
  role: 'admin'
};

// Mock users data
export const MOCK_USERS = [
  { id: '1', name: 'John Doe', email: 'john@example.com', joinDate: '2024-01-15', status: 'active', questionsCount: 15, answersCount: 23 },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', joinDate: '2024-02-01', status: 'active', questionsCount: 8, answersCount: 12 },
  // Add more mock users as needed
];

// Mock questions data
export const MOCK_QUESTIONS = [
  { id: '1', title: 'How to use React hooks?', author: 'John Doe', createdAt: '2024-03-01', status: 'answered', votes: 25, answers: 3, views: 150 },
  { id: '2', title: 'Best practices for API design', author: 'Jane Smith', createdAt: '2024-03-02', status: 'open', votes: 15, answers: 1, views: 89 },
  // Add more mock questions as needed
];

// Mock tags data
export const MOCK_TAGS = [
  { id: '1', name: 'react', questionsCount: 234, description: 'For questions about React.js' },
  { id: '2', name: 'javascript', questionsCount: 567, description: 'For questions about JavaScript' },
  // Add more mock tags as needed
];

// Mock activity logs
export const MOCK_LOGS = [
  { id: '1', action: 'question_created', user: 'John Doe', timestamp: '2024-03-10T10:30:00Z', details: 'Created question: How to use React hooks?' },
  { id: '2', action: 'answer_posted', user: 'Jane Smith', timestamp: '2024-03-10T11:15:00Z', details: 'Posted answer to: Best practices for API design' },
  // Add more mock logs as needed
];