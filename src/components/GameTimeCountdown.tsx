
import React, { useState, useEffect, useRef } from 'react';
import FlashingLight from '@/assets/flashing_light.gif';
import Image from 'next/image';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function GameTimeCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isLive, setIsLive] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const alarmPlayedRef = useRef<boolean>(false);

  const getNextSunday12PM = (): Date => {
    const now = new Date();
    const next = new Date(now);
    
    // Get days until next Sunday (0 = Sunday)
    const daysUntilSunday = (7 - now.getDay()) % 7;
    
    // If today is Sunday
    if (daysUntilSunday === 0) {
      // Check if it's before 12pm
      if (now.getHours() < 12) {
        next.setHours(12, 0, 0, 0);
      } else {
        // Already past 12pm, go to next Sunday
        next.setDate(next.getDate() + 7);
        next.setHours(12, 0, 0, 0);
      }
    } else {
      // Not Sunday, get next Sunday
      next.setDate(next.getDate() + daysUntilSunday);
      next.setHours(12, 0, 0, 0);
    }
    
    return next;
  };

//   const playAlarm = (): void => {
//     if (alarmPlayedRef.current) return;
    
//     const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
//     audioContextRef.current = new AudioContext();
//     alarmPlayedRef.current = true;
    
//     const beep = (): void => {
//       if (!audioContextRef.current) return;
      
//       const oscillator = audioContextRef.current.createOscillator();
//       const gainNode = audioContextRef.current.createGain();
      
//       oscillator.connect(gainNode);
//       gainNode.connect(audioContextRef.current.destination);
      
//       oscillator.frequency.value = 800;
//       oscillator.type = 'sine';
      
//       gainNode.gain.setValueAtTime(0.3, audioContextRef.current.currentTime);
//       gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.3);
      
//       oscillator.start(audioContextRef.current.currentTime);
//       oscillator.stop(audioContextRef.current.currentTime + 0.3);
//     };
    
//     // Play 3 beeps
//     beep();
//     setTimeout(beep, 400);
//     setTimeout(beep, 800);
//   };

  useEffect(() => {
    const updateCountdown = (): void => {
      const now = new Date();
      const target = getNextSunday12PM();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0 && !isLive) {
        setIsLive(true);
        // playAlarm();
        
        // Reset after 5 minutes
        setTimeout(() => {
          setIsLive(false);
          alarmPlayedRef.current = false;
        }, 300000);
        
        return;
      }

      if (!isLive && diff > 0) {
        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className={`flex items-center justify-center overflow-hidden transition-all duration-500`}>
      <style>{`
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .flashing {
          animation: flash 0.5s infinite;
        }
      `}</style>

      <div className="text-center">
        {!isLive ? (
          <div className="bg-neutral-900 border-4 border-red-700 rounded-3xl px-16 py-8 mb-4 shadow-[0_0_30px_rgba(196,30,58,0.5)]">
            <div 
              className="text-red-700 text-7xl font-bold font-mono tracking-[0.3rem]"
              style={{ textShadow: '0 0 20px rgba(196, 30, 58, 0.8)' }}
            >
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
            <div className="text-white text-xl mt-2 tracking-[0.2rem]">
              UNTIL IT'S GAMETIME
            </div>
          </div>
        ) : (
          <div className={`text-red-700 text-6xl tracking-[0.5rem] uppercase font-black ${isLive ? 'flashing' : ''}`}>
            <Image
              src={FlashingLight}
              alt="Alert" 
              className="w-52 h-52 mx-auto mb-4"
            />
            <div className="text-7xl mt-4">IT'S GAMETIME!</div>
          </div>
        )}
      </div>
    </div>
  );
}