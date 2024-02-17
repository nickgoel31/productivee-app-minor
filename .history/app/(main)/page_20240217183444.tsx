
import React, { useState, useEffect } from 'react';

export default function Home() {
  // const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentTime(new Date());
  //   }, 1000); // Update every second

  //   return () => clearInterval(intervalId);
  // }, []); // Run effect only once when component mounts

  // const hours = currentTime.getHours().toString().padStart(2, '0'); // Ensure two-digit format
  // const minutes = currentTime.getMinutes().toString().padStart(2, '0'); // Ensure two-digit format
  // const formattedTime = `${hours}:${minutes}`;

  return (
    <main className="flex flex-col gap-8 h-full py-8 flex-1 pr-10">
      <div className="space-y-2">
        <h1 className="font-semibold text-4xl">Overview</h1>
        <p className="font-medium text-sm text-neutral-400">We are all about productivity</p>
      </div>

      <div className="w-full flex flex-col gap-6 items-center justify-start">
        <div className='flex items-center w-full gap-4'>
          <div className='border rounded-xl p-4 flex-[1.8] flex flex-col gap-3'>
            <h2 className='text-lg font-semibold text-neutral-200'>
              Continue working with {"Lutune AI"}
            </h2>

            <div className='flex items-center gap-4'>
              <div>
                Kanban board
              </div>

              <div>
                Legacy Tasks
              </div>
            </div>

          </div>
          <div className='border rounded-xl p-4 flex-[1.2]'>
          
          </div>
        </div>
      </div>
    </main>
  );
}
