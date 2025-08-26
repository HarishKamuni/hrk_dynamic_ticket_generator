import { Code2, Github, Mail, Upload, User } from 'lucide-react';
import React from 'react';

const TicketForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-3xl">
              <Code2 className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-white text-3xl font-black mb-2">Codding Conf</h1>
          <h2 className="text-white text-2xl font-black mb-3 leading-tight">
            Your Journey to Codding Conf <br /> 2025 Status Here !
          </h2>
          <p className="text-gray-300 text-lg">
            {' '}
            Secure your spot at next year's biggest coding conference
          </p>
        </div>
        {/* form */}
        <form className="space-y-6">
          <div>
            <label className="block text-white text-sm font-medium mb-3">
              Upload Avatar
            </label>
            <div
              className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 cursor-pointer`}
            >
              <input type="file" className="hidden" />

              {/* Conditional Rendering */}
              <div className="flex flex-col items-center">
                <img
                  src=""
                  alt=""
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <p>Click to Change</p>
              </div>
              {/* Else */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-700 p-3 rounded-full mb-3">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-300 text-sm mb-1">Click to upload</p>
              </div>
            </div>
            {/* message */}
            <p className="text-gray-400 text-xs mt-2 flex items-center">
              Upload your photo (JPG or PNG, max size: 500KB)
            </p>
            {/* conditional rendering to display error message */}
            <p className="text-red-400 text-sm mt-1"></p>
          </div>
          {/* Full name */}
          <div className="mt-5">
            <label className="block text-white text-sm font-medium mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-4 transform -translate-y-0.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`w-full bg-gray-800/50 border rounded-lg py-3 pl-10 pr-4 text-white
               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                placeholder="Enter Your Full Name"
              />
            </div>
            {/* conditional rendering to display error message */}
            <p className="text-red-400 text-sm mt-1"></p>
          </div>
          {/* Email Address */}
          <div className="mt-5">
            <label className="block text-white text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-4 transform -translate-y-0.5 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full bg-gray-800/50 border rounded-lg py-3 pl-10 pr-4 text-white
               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                placeholder="Enter Your email address"
              />
            </div>
            {/* conditional rendering to display error message */}
            <p className="text-red-400 text-sm mt-1"></p>
          </div>
          {/* Github UserName */}
          <div className="mt-5">
            <label className="block text-white text-sm font-medium mb-2">
              Github Username
            </label>
            <div className="relative">
              <Github className="absolute left-3 top-4 transform -translate-y-0.5 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="github"
                name="github"
                className={`w-full bg-gray-800/50 border rounded-lg py-3 pl-10 pr-4 text-white
               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200`}
                placeholder="Enter Your Github Username"
              />
            </div>
            {/* conditional rendering to display error message */}
            <p className="text-red-400 text-sm mt-1"></p>
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold
          py-3 px-6 rounded-lg hover:from-orange-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-orange-500
          focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
