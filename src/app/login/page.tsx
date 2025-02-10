import React from 'react'

const login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-blue-50 shadow rounded">
        <h1 className="text-xl font-bold text-center mb-4 text-black">Login</h1>

        <form className="space-y-2">
          <input
            type="email"
            placeholder="Email"
            className="flex w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="flex w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default login;
