import { useState } from "react";
export function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-4 px-8 bg-white border-b">
        <a href="/" className="text-2xl font-bold">
          Po From Khaki<span className="text-green-500">.</span>
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
          >
            Login
          </button>
          <a
            href="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
          >
            Register
          </a>
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-3 p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Sign In
              </button>
            </form>
            <button
              onClick={() => setShowLogin(false)}
              className="mt-4 text-sm text-gray-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
