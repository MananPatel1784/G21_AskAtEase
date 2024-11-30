import React from 'react';
import { DataTable } from '../components/data-table/DataTable';
import { MOCK_TAGS } from '../lib/mock-data';

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => (
      <span className="px-2 py-1 bg-gray-100 rounded-full text-sm">
        {row.original.name}
      </span>
    ),
  },
  {
    accessorKey: 'questionsCount',
    header: 'Questions',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
];

export default function TagsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Tags</h1>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Add Tag
        </button>
      </div>
      <DataTable columns={columns} data={MOCK_TAGS} />
    </div>
  );
}