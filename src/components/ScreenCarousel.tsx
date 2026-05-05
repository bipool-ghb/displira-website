'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

interface ScreenContent {
  title: string;
  bg: string;
  content: React.ReactNode;
}

const screens: ScreenContent[] = [
  {
    title: 'Restaurant Menu',
    bg: 'from-amber-900 to-amber-950',
    content: (
      <div className="p-6 text-white">
        <div className="text-center mb-5">
          <div className="text-xs uppercase tracking-widest text-amber-300 mb-1">Chef&apos;s Selection</div>
          <div className="w-12 h-0.5 bg-amber-400 mx-auto" />
        </div>
        <div className="flex flex-col gap-3">
          {[
            { name: 'Grilled Salmon', price: '$28' },
            { name: 'Wagyu Ribeye', price: '$52' },
            { name: 'Lobster Risotto', price: '$36' },
          ].map((item) => (
            <div key={item.name} className="flex justify-between items-center border-b border-amber-800/50 pb-2">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-amber-300 font-bold text-sm">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Corporate',
    bg: 'from-slate-800 to-slate-900',
    content: (
      <div className="p-6 text-white">
        <div className="text-center mb-4">
          <div className="text-xs uppercase tracking-wider text-blue-300">Akij Group HQ</div>
          <div className="text-lg font-bold">Welcome</div>
        </div>
        <div className="bg-blue-900/30 rounded-lg p-3 mb-3">
          <div className="text-[10px] text-blue-300 uppercase">Upcoming</div>
          <div className="text-sm font-medium">Town Hall Friday 3PM</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-900/30 rounded-lg p-2.5">
            <div className="text-[10px] text-green-300">Q2 Revenue</div>
            <div className="text-sm font-bold text-green-300">$4.2M <span className="text-[10px]">&#8593;18%</span></div>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-2.5">
            <div className="text-[10px] text-purple-300">Spotlight</div>
            <div className="text-xs font-medium">Employee of the Month</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Fashion Retail',
    bg: 'from-pink-900 to-rose-950',
    content: (
      <div className="p-6 text-white flex flex-col items-center justify-center h-full">
        <div className="text-[10px] uppercase tracking-[0.3em] text-pink-300 mb-2">New Collection</div>
        <div className="text-2xl font-bold mb-1">Summer 2026</div>
        <div className="text-xs text-pink-200 mb-5">Discover the latest trends</div>
        <div className="px-5 py-2 bg-white text-pink-900 rounded-full text-xs font-semibold">Shop Now</div>
      </div>
    ),
  },
  {
    title: 'Grocery',
    bg: 'from-green-900 to-green-950',
    content: (
      <div className="p-6 text-white">
        <div className="text-center mb-4">
          <div className="text-lg font-bold">Fresh Market</div>
          <div className="text-[10px] text-green-300 uppercase">Today&apos;s Prices</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'Salmon', price: '$12.99/lb' },
            { name: 'Chicken', price: '$8.49/lb' },
            { name: 'Steak', price: '$15.99/lb' },
            { name: 'Avocados', price: '$1.29/ea' },
          ].map((item) => (
            <div key={item.name} className="bg-green-800/40 rounded-lg p-2.5 text-center">
              <div className="text-xs font-medium">{item.name}</div>
              <div className="text-sm font-bold text-green-300">{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Clinic',
    bg: 'from-cyan-900 to-teal-950',
    content: (
      <div className="p-6 text-white">
        <div className="text-center mb-4">
          <div className="text-[10px] uppercase tracking-wider text-cyan-300">Now Serving</div>
          <div className="text-3xl font-bold text-cyan-100">A-24</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-cyan-800/40 rounded-lg p-2.5 flex justify-between">
            <span className="text-xs">Dr. Ahmed</span>
            <span className="text-xs text-cyan-300">Room 3</span>
          </div>
          <div className="bg-cyan-800/40 rounded-lg p-2.5 flex justify-between">
            <span className="text-xs">Wait Time</span>
            <span className="text-xs text-cyan-300">~12 min</span>
          </div>
          <div className="bg-cyan-800/40 rounded-lg p-2.5 flex justify-between">
            <span className="text-xs">In Queue</span>
            <span className="text-xs text-cyan-300">6</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Event',
    bg: 'from-indigo-900 to-violet-950',
    content: (
      <div className="p-6 text-white">
        <div className="text-center mb-4">
          <div className="text-xs font-bold text-indigo-300">TechSummit 2026</div>
          <div className="text-sm font-bold">Today&apos;s Schedule</div>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { time: '10:00 AM', event: 'Keynote', badge: 'NOW' },
            { time: '11:30 AM', event: 'Workshop', badge: '' },
            { time: '2:00 PM', event: 'Panel', badge: '' },
          ].map((item) => (
            <div key={item.time} className="bg-indigo-800/40 rounded-lg p-2.5 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-indigo-300">{item.time}</div>
                <div className="text-xs font-medium">{item.event}</div>
              </div>
              {item.badge && (
                <span className="px-2 py-0.5 bg-red-500 rounded text-[9px] font-bold">{item.badge}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function ScreenCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % screens.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + screens.length) % screens.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  const getIndex = (offset: number) => (active + offset + screens.length) % screens.length;

  return (
    <RevealOnScroll>
      <div
        className="relative w-full max-w-5xl mx-auto py-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Screens */}
        <div className="flex items-center justify-center gap-4 md:gap-6 h-[280px] md:h-[320px]">
          {/* Left */}
          <div className="hidden md:block w-56 opacity-50 scale-90 transition-all duration-500">
            <ScreenFrame screen={screens[getIndex(-1)]} />
          </div>

          {/* Center */}
          <div className="w-72 md:w-80 transition-all duration-500">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ScreenFrame screen={screens[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right */}
          <div className="hidden md:block w-56 opacity-50 scale-90 transition-all duration-500">
            <ScreenFrame screen={screens[getIndex(1)]} />
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center shadow-md hover:bg-bg-soft transition-colors"
          aria-label="Previous screen"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-border rounded-full flex items-center justify-center shadow-md hover:bg-bg-soft transition-colors"
          aria-label="Next screen"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === active ? 'bg-primary w-6' : 'bg-border hover:bg-text-light'
              }`}
              aria-label={`Go to screen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}

function ScreenFrame({ screen }: { screen: ScreenContent }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
      {/* TV bezel top */}
      <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-between">
        <div className="text-[9px] text-gray-400">{screen.title}</div>
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
      </div>
      {/* Screen content */}
      <div className={`bg-gradient-to-br ${screen.bg} aspect-video flex flex-col justify-center`}>
        {screen.content}
      </div>
    </div>
  );
}
