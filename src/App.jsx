import React from 'react';
import { Facebook, AlertCircle } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Facebook className="text-blue-500 w-12 h-12" />
        </div>
        <h1 className="text-2xl font-semibold text-center mb-6">ফেসবুকে লগ ইন করুন</h1>
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="block sm:inline">অবিরত রাখতে আপনাকে লগ ইন করতে হবে।</span>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="ইমেইল বা ফোন নম্বর"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="পাসওয়ার্ড"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            লগ ইন
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">অ্যাকাউন্ট ভুলে গেছেন?</a>
          <span className="mx-2">·</span>
          <a href="#" className="text-blue-500 hover:underline">ফেসবুকের জন্য সাইন আপ করুন</a>
        </div>
      </div>
      <div className="absolute bottom-4 text-center w-full text-sm text-white">
        ওয়েবস্পার্কস এআই দ্বারা ডিজাইন করা
      </div>
    </div>
  );
};

export default App;
