import React from 'react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      
      <div className="bg-white shadow rounded-lg divide-y">
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Site Settings</h3>
          <div className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Site Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue="Ask at Ease"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Site Description
              </label>
              <textarea
                rows={3}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                defaultValue="A community-driven Q&A platform"
              />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Email Settings</h3>
          <div className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SMTP Host
              </label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="smtp.example.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SMTP Port
              </label>
              <input
                type="number"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="587"
              />
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
          <div className="mt-6 space-y-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  Enable Two-Factor Authentication
                </label>
                <p className="text-gray-500">
                  Require 2FA for all admin users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="button"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}