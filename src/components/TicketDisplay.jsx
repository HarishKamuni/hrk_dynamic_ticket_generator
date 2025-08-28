import {
  ArrowLeft,
  Calendar,
  Code2,
  Download,
  MapPin,
  Printer,
  TimerIcon,
} from 'lucide-react';
import React from 'react';

const TicketDisplay = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center text-white hover:text-orange-400 transition-all duration-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back To Form
          </button>
          <div className="flex space-x-4">
            <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </button>
            <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-all duration-200">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
          </div>
        </div>
        {/* Ticket */}
        <div
          id="conference-ticket"
          className="bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none"
        >
          <div className="relative">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 ring-0 w-64 h-64 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full transform translate-x-32 translate-y-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transform -translate-x-24 translate-y-24"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-xl mr-4">
                      <Code2 className="w8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold">Coding Conf 2025</h1>
                      <h1 className="text-gray-300">
                        The Future Of Development
                      </h1>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 text-sm">Ticket ID</p>
                    <p className="font-mono text-sm">Ticket Number</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-orange-400" />
                    <div>
                      <p className="text-gray-300 text-sm">Date</p>
                      <p className="font-semibold">October 15-17, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                    <div>
                      <p className="text-gray-300 text-sm">Location</p>
                      <p className="font-semibold">
                        Solapur Maharashtra, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <TimerIcon className="w-5 h-5 mr-3 text-orange-400" />
                    <div>
                      <p className="text-gray-300 text-sm">Time</p>
                      <p className="font-semibold">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Ticket Body */}
            {/* break */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDisplay;
