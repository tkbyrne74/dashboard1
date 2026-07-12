import React from 'react'
export default function Sidebar() {
  return (
    <aside className="w-72 bg-white h-screen border-r hidden md:block">
      <div className="p-6">
        <div className="text-2xl font-bold mb-6">Dashboard</div>
        <nav className="space-y-2">
          <a className="block px-3 py-2 rounded hover:bg-gray-100">Overview</a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">Analytics</a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">Orders</a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">Settings</a>
        </nav>
      </div>
    </aside>
  )
}
