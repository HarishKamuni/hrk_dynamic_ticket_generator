import React, { useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketDisplay from './components/TicketDisplay';

const App = () => {
  const [ticketData, setTicketData] = useState(null);
  const [showTicket, setShowTicket] = useState(false);

  const handleGenerateTicket = (data) => {
    setTicketData(data);
    setShowTicket(true);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 transform -translate-x-0.5 -translate-y-0.5 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/50 rounded-full blur-3xl"></div>
      </div>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0"></div>
      <div className="relative z-10">
        {showTicket ? (
          <TicketDisplay />
        ) : (
          <TicketForm onGenerateTicket={handleGenerateTicket} />
        )}
      </div>
    </div>
  );
};

export default App;
