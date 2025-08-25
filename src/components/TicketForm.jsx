import { Code2 } from 'lucide-react';
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
