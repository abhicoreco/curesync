import { Link } from 'react-router-dom'
import React from 'react'

const CommingSoon = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-pink-50 to-blue-50 p-4 text-center">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              Great things coming soon.
            </h1>
            <p className="mb-10 text-lg text-gray-700">We are a small and growing consulting firm with big ideas.</p>
            <Link
                to={"/"}
                className="inline-flex items-center border border-gray-800 px-6 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-800 hover:text-white"
            >
             Back to Home →
            </Link>
          </div>
        </div>
      )
}

export default CommingSoon