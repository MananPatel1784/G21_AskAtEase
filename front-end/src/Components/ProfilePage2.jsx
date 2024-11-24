import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
  CameraAlt,
  Mail,
  Edit,
  Search,
  DarkMode,
  LocationOn,
  School,
  Work,
} from '@mui/icons-material';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tabs from '@radix-ui/react-tabs';
import * as ScrollArea from '@radix-ui/react-scroll-area';

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => props.darkMode ? '#1a1a1a' : '#f5f5f5'};
  color: ${props => props.darkMode ? '#fff' : '#000'};
`;

const Card = styled.div`
  background-color: ${props => props.darkMode ? '#2d2d2d' : '#fff'};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  ${props => props.primary ? `
    background-color: #2563eb;
    color: white;
    &:hover {
      background-color: #1d4ed8;
    }
  ` : `
    background-color: transparent;
    border: 1px solid #e5e7eb;
    &:hover {
      background-color: ${props.darkMode ? '#3d3d3d' : '#f9fafb'};
    }
  `}
`;

const Badge = styled.span`
  display: inline-flex;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  background-color: ${props => props.darkMode ? '#374151' : '#e5e7eb'};
  color: ${props => props.darkMode ? '#fff' : '#000'};
`;

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Mock data
  const profile = {
    name: "John Doe",
    username: "@johndoe",
    headline: "AI Enthusiast | Technical Writer | Full Stack Developer",
    stats: {
      questions: 42,
      answers: 156,
      followers: 1289,
      following: 847,
      // views: 25631
    },
    about: {
      bio: "Passionate about technology and helping others learn. I specialize in explaining complex concepts in simple terms.",
      education: "MS Computer Science, University of XYZ",
      work: "Senior Developer at Tech Corp",
      location: "San Francisco, CA"
    }
  };

  const recentActivity = [
    {
      type: "answer",
      title: "How does React's Virtual DOM work?",
      votes: 234,
      date: "2 days ago"
    },
    {
      type: "question",
      title: "What are the best practices for React Performance?",
      answers: 12,
      date: "1 week ago"
    }
  ];

  const followedTopics = [
    "React", "JavaScript", "Web Development", "AI", "Machine Learning"
  ];

  return (
    <Container darkMode={darkMode}>
      <div className="max-w-5xl mx-auto p-4">
        {/* Header Section */}
        <div className="relative mb-8">
          <div 
            className="h-48 rounded-lg"
            style={{
              background: 'linear-gradient(to right, #3b82f6, #8b5cf6)'
            }}
          />
          
          <div className="flex flex-col md:flex-row -mt-16 px-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-white border-4 border-white overflow-hidden">
                <img 
                  src="/profile-placeholder.jpg" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg">
                  <CameraAlt style={{ fontSize: 16 }} />
                </button>
              </div>
            </div>

            <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{profile.name}</h1>
                  <p className="text-gray-600">{profile.username}</p>
                  <p className="text-sm mt-1">{profile.headline}</p>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button darkMode={darkMode}>
                    <Mail style={{ fontSize: 16 }} />
                    Message
                  </Button>
                  <Button primary>
                    <Edit style={{ fontSize: 16 }} />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <Card darkMode={darkMode}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {Object.entries(profile.stats).map(([key, value]) => (
              <div key={key}>
                <div className="text-2xl font-bold">{value.toLocaleString()}</div>
                <div className="text-sm text-gray-600">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div>
            <Card darkMode={darkMode}>
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-sm mb-4">{profile.about.bio}</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <School />
                  <span>{profile.about.education}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Work />
                  <span>{profile.about.work}</span>
                </div>
                <div className="flex items-center gap-2">
                  <LocationOn />
                  <span>{profile.about.location}</span>
                </div>
              </div>
            </Card>

            <Card darkMode={darkMode}>
              <h2 className="text-xl font-semibold mb-4">Topics Following</h2>
              <div className="flex flex-wrap gap-2">
                {followedTopics.map((topic, index) => (
                  <Badge key={index} darkMode={darkMode}>
                    {topic}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Activity */}
          <div className="md:col-span-2">
            <Card darkMode={darkMode}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Activity</h2>
                <div className="flex items-center gap-2">
                  <Button darkMode={darkMode}>
                    <Search style={{ fontSize: 16 }} />
                  </Button>
                  <Button 
                    darkMode={darkMode}
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    <DarkMode style={{ fontSize: 16 }} />
                  </Button>
                </div>
              </div>

              <Tabs.Root defaultValue="all">
                <Tabs.List className="flex gap-4 mb-6">
                  <Tabs.Trigger value="all" className="px-4 py-2 rounded-lg">
                    All
                  </Tabs.Trigger>
                  <Tabs.Trigger value="questions" className="px-4 py-2 rounded-lg">
                    Questions
                  </Tabs.Trigger>
                  <Tabs.Trigger value="answers" className="px-4 py-2 rounded-lg">
                    Answers
                  </Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="all">
                  <ScrollArea.Root className="h-[400px]">
                    <ScrollArea.Viewport>
                      <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                          <Card key={index} darkMode={darkMode}>
                            <div className="flex items-start justify-between">
                              <div>
                                <Badge darkMode={darkMode}>
                                  {activity.type}
                                </Badge>
                                <h3 className="font-medium mt-2">{activity.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {activity.date}
                                </p>
                              </div>
                              <div>
                                {activity.type === 'answer' && (
                                  <span>{activity.votes} votes</span>
                                )}
                                {activity.type === 'question' && (
                                  <span>{activity.answers} answers</span>
                                )}
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar orientation="vertical">
                      <ScrollArea.Thumb />
                    </ScrollArea.Scrollbar>
                  </ScrollArea.Root>
                </Tabs.Content>

                <Tabs.Content value="questions">
                  {/* Questions content */}
                </Tabs.Content>

                <Tabs.Content value="answers">
                  {/* Answers content */}
                </Tabs.Content>
              </Tabs.Root>
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
