import React from 'react'
export default function StatCard({ title, value, delta }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 flex items-baseline justify-between">
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-sm text-green-600">{delta}</div>
      </div>
    </div>
  )
}
