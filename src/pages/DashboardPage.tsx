import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, MessageSquare, Tag, ThumbsUp } from 'lucide-react';

const stats = [
  { name: 'Total Users', value: '1,234', icon: Users, change: '+12%' },
  { name: 'Questions', value: 'Loading...', icon: MessageSquare, change: '+8%' }, // Placeholder value
  { name: 'Tags', value: '789', icon: Tag, change: '+23%' },
  { name: 'Answers', value: '5,678', icon: ThumbsUp, change: '+15%' },
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
  const [questionsCount, setQuestionsCount] = useState('Loading...');

  useEffect(() => {
    const fetchQuestionsCount = async () => {
      try {
        // const response = await fetch('/api/questions/count'); // Adjust endpoint as per backend
        const response = await fetch('http://localhost:3000/api/questions/count');
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
