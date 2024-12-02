import React from 'react';
import { DataTable } from '../components/data-table/DataTable';
import { MOCK_LOGS } from '../lib/mock-data';

const columns = [
  {
    accessorKey: 'timestamp',
    header: 'Time',
    cell: ({ row }) => new Date(row.original.timestamp).toLocaleString(),
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
        {row.original.action.replace('_', ' ')}
      </span>
    ),
  },
  {
    accessorKey: 'user',
    header: 'User',
  },
  {
    accessorKey: 'details',
    header: 'Details',
  },
];

export default function LogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Activity Logs</h1>
      </div>
      <DataTable columns={columns} data={MOCK_LOGS} />
    </div>
  );
}