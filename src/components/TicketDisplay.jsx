import {
  ArrowLeft,
  Calendar,
  Code2,
  Download,
  Github,
  Mail,
  MapPin,
  Printer,
  QrCode,
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
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="mr-6">
                    {/* conditional rendering */}
                    <img
                      src=""
                      className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                      crossOrigin="anonymous"
                    />
                    {/* Else */}
                    <div
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500
                     to-pink-500 flex items-center justify-center text-white text-2xl font-bold"
                    ></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">
                      Full Name
                    </h2>
                    <div className="space-y-1">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>Email</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Github className="w-4 h-4 mr-2" />
                        <span>Git Hub UserName</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        General Admission
                      </span>
                    </div>
                  </div>
                </div>
                {/* QR Code */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 p-4 rounded-lg mb-2">
                    <QrCode className="w-16 h-16 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Scan for entry
                  </p>
                </div>
              </div>
              {/* Ticket Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What's Included
                    </h4>
                    <ul className="space-y-1">
                      <li>* 3-day conference access</li>
                      <li>* All keynite sessions</li>
                      <li>* Workshop Participation</li>
                      <li>* Networking Events</li>
                      <li>* Conference Material</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Important Information
                    </h4>
                    <ul className="space-y-1">
                      <li>* Please bring this ticket</li>
                      <li>* Doors open at 8:30 AM</li>
                      <li>* Photo ID required for entry</li>
                      <li>* No refunds aftre March 1st</li>
                      <li>* Visit codingconf.com for updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Success Message */}
        <div className="text-center mt-8">
          <p className="text-white text-lg mb-2">
            Your ticket has been generated successfully
          </p>
          <p className='text-gray-300'>save this ticket and bring it to the conference. See you there!</p>
        </div>
      </div>
    </div>
  );
};

export default TicketDisplay;
