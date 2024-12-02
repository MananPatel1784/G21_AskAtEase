
// ------------------------------------------------------------------
// 2nd iteration
import React, { useEffect, useState } from 'react';
import { DataTable } from '../components/data-table/DataTable';
import { formatDate } from '../lib/utils';

const columns = [
  {
    accessorKey: 'username',
    header: 'Name',
  },
  {
    accessorKey: 'emailId',
    header: 'Email',
  },
  {
    accessorKey: 'joinDate',
    header: 'Join Date',
    cell: ({ row }) => formatDate(row.original.joinDate),
  },
       
];

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch user data from backend API
    async function fetchUsers() {
      try {
        const response = await fetch('https://askatease-adminpage-backend.onrender.com/api/users'); // Adjust endpoint as per backend
        // const response = await fetch(''); // /api/users Update the API endpoint if needed
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        // Format data for the DataTable
        const formattedData = data.map(user => ({
          username: user.username,
          emailId: user.emailId,
          joinDate: user.createdAt,
        }));
        setUsers(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);
  if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }
    
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Add User
            </button>
          </div>
          <DataTable columns={columns} data={users} />
        </div>
      );
    }
// ------------------------------------------------------------------
  // 1st iteration
//   // Function to fetch Answers Count
// useEffect(() => {
//   const fetchAnswersCount = async () => {
//     try {
//       const response = await fetch('https://askatease-adminpage-backend.onrender.com/api/answers/count'); // Adjust endpoint as per backend
//       if (!response.ok) {
//         throw new Error('Failed to fetch answers count');
//       }
//       const data = await response.json();
//       setAnswersCount(data.count);
//     } catch (error) {
//       setAnswersCount('Error');
//       console.error('Error fetching answers count:', error);
//     }
//   };

//   fetchAnswersCount();
// }, []);
// stats[1].value = answersCount;


//   useEffect(() => {
//     const fetchQuestionsCount = async () => {
//       try {
//         // const response = await fetch('/api/questions/count'); // Adjust endpoint as per backend
//         const response = await fetch('https://askatease-adminpage-backend.onrender.com/api/questions/count');
//         if (!response.ok) {
//           throw new Error('Failed to fetch questions count');
//         }
//         const data = await response.json();
//         setQuestionsCount(data.count);
//       } catch (error) {
//         setQuestionsCount('Error');
//         console.error('Error fetching questions count:', error);
//       }
//     };

//     fetchQuestionsCount();
//   }, []);

//   // Replace the "Questions" stat dynamically
//   stats[0].value = questionsCount;


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
//         <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
//           Add User
//         </button>
//       </div>
//       <DataTable columns={columns} data={users} />
//     </div>
//   );
// }
// import React from 'react';
// import { DataTable } from '../components/data-table/DataTable';
// import { MOCK_USERS } from '../lib/mock-data';
// import { formatDate } from '../lib/utils';

// const columns = [
//   {
//     accessorKey: 'name',
//     header: 'Name',
//   },
//   {
//     accessorKey: 'email',
//     header: 'Email',
//   },
//   {
//     accessorKey: 'joinDate',
//     header: 'Join Date',
//     cell: ({ row }) => formatDate(row.original.joinDate),
//   },
//   {
//     accessorKey: 'questionsCount',
//     header: 'Questions',
//   },
//   {
//     accessorKey: 'answersCount',
//     header: 'Answers',
//   },
// ];

// export default function UsersPage() {
//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
//         <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
//           Add User
//         </button>
//       </div>
//       <DataTable columns={columns} data={MOCK_USERS} />
//     </div>
//   );
// }




// bad iteration


// import React, { useEffect, useState } from 'react';
// import { DataTable } from '../components/data-table/DataTable';
// import { formatDate } from '../lib/utils';

// const columns = [
//   {
//     accessorKey: 'username',
//     header: 'Name',
//   },
//   {
//     accessorKey: 'emailId',
//     header: 'Email',
//   },
//   {
//     accessorKey: 'joinDate',
//     header: 'Join Date',
//     cell: ({ row }) => formatDate(row.original.joinDate),
//   },
//   {
//     accessorKey: 'questionsCount',
//     header: 'Questions',
//   },
//   {
//     accessorKey: 'answersCount',
//     header: 'Answers',
//   },
// ];

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch('https://askatease-adminpage-backend.onrender.com/api/users'); // Adjust endpoint if needed
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         // Format data for the DataTable
//         const formattedData = data.map(user => ({
//           username: user.username,
//           emailId: user.emailId,
//           joinDate: user.createdAt,
//           questionsCount: user.questionsCount,
//           answersCount: user.answersCount,
//         }));
//         setUsers(formattedData);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchUsers();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
//         <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
//           Add User
//         </button>
//       </div>
//       <DataTable columns={columns} data={users} />
//     </div>
//   );
// }




