import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import LineChart from './components/LineChart'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatCard title="Users" value="12.4k" delta="+7.2%" />
              <StatCard title="Revenue" value="$84.2k" delta="+3.1%" />
              <StatCard title="Orders" value="1,240" delta="-1.4%" />
              <StatCard title="Active" value="3,102" delta="+12.0%" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-medium mb-2">Traffic (last 30 days)</h3>
                <LineChart />
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-lg font-medium mb-2">Top products</h3>
                <p className="text-sm text-gray-500">Example table or list goes here.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
