import React from 'react'
export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="flex items-center justify-between p-4 md:p-6">
        <div className="text-lg font-semibold">Overview</div>
        <div className="flex items-center gap-4">
          <input
            className="hidden sm:block border rounded px-3 py-1 text-sm"
            placeholder="Search..."
            aria-label="Search"
          />
          <div className="w-8 h-8 rounded-full bg-gray-200" aria-hidden />
        </div>
      </div>
    </header>
  )
}
