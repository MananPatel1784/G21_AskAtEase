import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, MessageSquare, Tag, ThumbsUp } from 'lucide-react';
import NotificationPanel from '../components/notifications/NotificationPanel';
import { useNotificationStore } from '../store/notification-store';


const stats = [
  { name: 'Total Users', value: 'Loading.', icon: Users, },
  { name: 'Questions', value: 'Loading..', icon: MessageSquare, }, // Placeholder value
  // { name: 'Tags', value: '789', icon: Tag, change: '+23%' },
  { name: 'Answers', value: 'Loading...', icon: ThumbsUp,  },
];

const activityData = [
  { name: 'Mon', questions: 40, answers: 24 },
  { name: 'Tue', questions: 30, answers: 45 },
  { name: 'Wed', questions: 55, answers: 65 },
  { name: 'Thu', questions: 45, answers: 85 },
  { name: 'Fri', questions: 65, answers: 55 },
  { name: 'Sat', questions: 35, answers: 45 },
  { name: 'Sun', questions: 25, answers: 35 },
];


export default function DashboardPage() {
  const { fetchNotifications } = useNotificationStore();

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const [questionsCount, setQuestionsCount] = useState('Loading..');
  const [usersCount, setUsersCount] = useState('Loading.');
  const [answersCount, setAnswersCount] = useState('Loading...');
  // Function to fetch Users Count
  useEffect(() => {
    const fetchUsersCount = async () => {
      try {
        const response = await fetch('https://askatease-adminpage-backend.onrender.com/api/users/count'); // Adjust endpoint as per backend
        if (!response.ok) {
          throw new Error('Failed to fetch users count');
        }
        const data = await response.json();
        setUsersCount(data.count);
      } catch (error) {
        setUsersCount('Error');
        console.error('Error fetching users count:', error);
      }
    };

    fetchUsersCount();
  }, []);
  stats[0].value = usersCount;

  // Function to fetch Answers Count
useEffect(() => {
  const fetchAnswersCount = async () => {
    try {
      const response = await fetch('https://askatease-adminpage-backend.onrender.com/api/answers/count'); // Adjust endpoint as per backend
      if (!response.ok) {
        throw new Error('Failed to fetch answers count');
      }
      const data = await response.json();
      setAnswersCount(data.count);
    } catch (error) {
      setAnswersCount('Error');
      console.error('Error fetching answers count:', error);
    }
  };

  fetchAnswersCount();
}, []);
stats[2].value = answersCount;


  useEffect(() => {
    const fetchQuestionsCount = async () => {
      try {
        // const response = await fetch('/api/questions/count'); // Adjust endpoint as per backend
        const response = await fetch('https://askatease-adminpage-backend.onrender.com/api/questions/count');
        if (!response.ok) {
          throw new Error('Failed to fetch questions count');
        }
        const data = await response.json();
        setQuestionsCount(data.count);
      } catch (error) {
        setQuestionsCount('Error');
        console.error('Error fetching questions count:', error);
      }
    };

    fetchQuestionsCount();
  }, []);

  // Replace the "Questions" stat dynamically
  stats[1].value = questionsCount;

  return (
    
      
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <NotificationPanel />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Weekly Activity
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="questions" fill="#4f46e5" name="Questions" />
              <Bar dataKey="answers" fill="#818cf8" name="Answers" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
