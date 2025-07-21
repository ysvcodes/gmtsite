import React, { useState, useEffect } from "react";

const LOGO_URL = "/logo-placeholder.png"; // Replace with your logo path

export default function ClientLogin() {
  const [theme, setTheme] = useState("dark");
  const [showForm, setShowForm] = useState(false);

  // Animate form on mount
  useEffect(() => {
    setTimeout(() => setShowForm(true), 100);
  }, []);

  // Toggle theme
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className={`${theme === "dark" ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-gray-100 via-white to-gray-200"} min-h-screen flex items-center justify-center transition-colors duration-500 relative overflow-hidden`}> 
      {/* Optional: Subtle animated background effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      </div>
      {/* Theme toggle */}
      <button
        className="absolute top-6 right-6 z-10 bg-gray-700/80 text-white px-3 py-1 rounded-full shadow hover:bg-gray-600 transition"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      {/* Login Box */}
      <div
        className={`relative z-10 w-full max-w-md mx-auto rounded-xl shadow-2xl p-8 flex flex-col items-center
          ${theme === "dark" ? "bg-gray-900/90" : "bg-white/90"}
          transition-all duration-700
          ${showForm ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ backdropFilter: "blur(8px)" }}
      >
        {/* Logo/Company Name */}
        <div className="flex flex-col items-center mb-4">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-2">
            <span className="text-2xl text-white font-bold">GMT</span>
          </div>
          <h1 className={`text-2xl font-bold mb-2 tracking-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>GMT Client Portal</h1>
        </div>
        {/* Login Form */}
        <form className="w-full flex flex-col gap-4">
          <label className="flex flex-col gap-1">
            <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Email</span>
            <input
              type="email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
              placeholder="you@email.com"
              autoComplete="username"
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>Password</span>
            <input
              type="password"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-900"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 mt-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition"
          >
            Log In
          </button>
        </form>
        <div className="w-full flex justify-end mt-2">
          <a href="/forgot-password" className="text-xs text-blue-400 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
} 