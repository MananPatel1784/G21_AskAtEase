import React from 'react';
import { DataTable } from '../components/data-table/DataTable';
import { MOCK_USERS } from '../lib/mock-data';
import { formatDate } from '../lib/utils';

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'joinDate',
    header: 'Join Date',
    cell: ({ row }) => formatDate(row.original.joinDate),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        row.original.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: 'questionsCount',
    header: 'Questions',
  },
  {
    accessorKey: 'answersCount',
    header: 'Answers',
  },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Add User
        </button>
      </div>
      <DataTable columns={columns} data={MOCK_USERS} />
    </div>
  );
}