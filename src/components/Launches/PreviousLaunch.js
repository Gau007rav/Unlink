import React from 'react'

function PreviousLaunch({ missionName, time, rocket, flightNumber }) {
  return (
    <div className="w-full mt-4">
      <div className="max-w-full rounded-xl overflow-hidden shadow-lg p-4 bg-amber-950">
        <h2 className="text-xl font-bold mb-4 text-white">Past Launches</h2>
        <div className="mb-2">
          <h3 className="text-md font-semibold text-white">Mission Name:</h3>
          <p className="text-gray-300">{missionName}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-md font-semibold text-white">Time:</h3>
          <p className="text-gray-300">{time}</p>
        </div>
        <div className="mb-2">
          <h3 className="text-md font-semibold text-white">Rocket:</h3>
          <p className="text-gray-300">{rocket}</p>
        </div>
        <div>
          <h3 className="text-md font-semibold text-white">Flight Number:</h3>
          <p className="text-gray-300">{flightNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default PreviousLaunch;
