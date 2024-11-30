import React from 'react';
import { DataTable } from '../components/data-table/DataTable';
import { MOCK_QUESTIONS } from '../lib/mock-data';
import { formatDate } from '../lib/utils';

const columns = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'author',
    header: 'Author',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created',
    cell: ({ row }) => formatDate(row.original.createdAt),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        row.original.status === 'answered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: 'votes',
    header: 'Votes',
  },
  {
    accessorKey: 'answers',
    header: 'Answers',
  },
  {
    accessorKey: 'views',
    header: 'Views',
  },
];

export default function QuestionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Questions</h1>
      </div>
      <DataTable columns={columns} data={MOCK_QUESTIONS} />
    </div>
  );
}