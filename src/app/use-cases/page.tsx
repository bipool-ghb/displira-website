import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import CTABanner from '@/components/CTABanner';
import RevealOnScroll from '@/components/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Use Cases — Displira',
  description: 'See how businesses across industries use Displira digital signage.',
};

interface UseCase {
  industry: string;
  title: string;
  problem: string;
  solution: string;
  screenBg: string;
  screenContent: React.ReactNode;
}

const useCases: UseCase[] = [
  {
    industry: 'Restaurant',
    title: 'Digital Menu Boards',
    problem: 'Paper menus are costly to reprint and impossible to update in real time for daily specials or price changes.',
    solution: 'Display dynamic digital menus that update instantly. Highlight specials, show images, and schedule happy hour pricing automatically.',
    screenBg: 'from-amber-900 to-amber-950',
    screenContent: (
      <div className="p-5 text-white text-center">
        <div className="text-[10px] uppercase tracking-widest text-amber-300 mb-2">Today&apos;s Menu</div>
        <div className="text-sm font-bold mb-3">Chef&apos;s Specials</div>
        <div className="flex flex-col gap-1.5 text-xs">
          <div className="flex justify-between"><span>Grilled Salmon</span><span className="text-amber-300">$28</span></div>
          <div className="flex justify-between"><span>Wagyu Ribeye</span><span className="text-amber-300">$52</span></div>
        </div>
      </div>
    ),
  },
  {
    industry: 'Retail',
    title: 'In-Store Promotions',
    problem: 'Static posters and banners are expensive to produce and quickly become outdated.',
    solution: 'Run dynamic promotional displays that rotate offers, showcase new arrivals, and drive impulse purchases.',
    screenBg: 'from-pink-900 to-rose-950',
    screenContent: (
      <div className="p-5 text-white text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-pink-300 mb-1">New Collection</div>
        <div className="text-lg font-bold">Summer 2026</div>
        <div className="mt-3 px-4 py-1.5 bg-white text-pink-900 rounded-full text-[10px] font-semibold inline-block">Shop Now</div>
      </div>
    ),
  },
  {
    industry: 'Grocery',
    title: 'Price & Promo Displays',
    problem: 'Grocery stores struggle with frequent price changes across hundreds of products.',
    solution: 'Display real-time pricing, daily deals, and seasonal promotions on screens throughout the store.',
    screenBg: 'from-green-900 to-green-950',
    screenContent: (
      <div className="p-5 text-white text-center">
        <div className="text-sm font-bold mb-2">Fresh Market</div>
        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <div className="bg-green-800/40 rounded p-1.5"><div>Salmon</div><div className="text-green-300 font-bold">$12.99/lb</div></div>
          <div className="bg-green-800/40 rounded p-1.5"><div>Chicken</div><div className="text-green-300 font-bold">$8.49/lb</div></div>
        </div>
      </div>
    ),
  },
  {
    industry: 'Corporate',
    title: 'Office Communication',
    problem: 'Important company updates get lost in email overload and are missed by employees.',
    solution: 'Display KPIs, announcements, meeting schedules, and company news on lobby and break room screens.',
    screenBg: 'from-slate-800 to-slate-900',
    screenContent: (
      <div className="p-5 text-white text-center">
        <div className="text-[10px] text-blue-300 uppercase">Akij Group HQ</div>
        <div className="text-sm font-bold mb-2">Welcome</div>
        <div className="bg-blue-900/30 rounded p-2 text-xs">Town Hall Friday 3PM</div>
      </div>
    ),
  },
  {
    industry: 'School',
    title: 'Campus Information',
    problem: 'Schools rely on bulletin boards and PA systems that are inefficient and easy to ignore.',
    solution: 'Share class schedules, event announcements, emergency alerts, and student achievements on hallway displays.',
    screenBg: 'from-blue-900 to-blue-950',
    screenContent: (
      <div className="p-5 text-white text-center">
        <div className="text-[10px] text-blue-300 uppercase">Campus Announcements</div>
        <div className="text-sm font-bold mb-2">Today&apos;s Events</div>
        <div className="text-[10px] bg-blue-800/40 rounded p-2">Science Fair - Gym - 2PM</div>
      </div>
    ),
  },
  {
    industry: 'Clinic',
    title: 'Patient Queue & Info',
    problem: 'Manual queue calling is chaotic, and patients lack visibility into wait times.',
    solution: 'Display real-time queue numbers, doctor availability, wait times, and health tips on waiting room screens.',
    screenBg: 'from-cyan-900 to-teal-950',
    screenContent: (
      <div className="p-5 text-white text-center">
        <div className="text-[10px] text-cyan-300 uppercase">Now Serving</div>
        <div className="text-2xl font-bold text-cyan-100">A-24</div>
        <div className="text-[10px] mt-1">Dr. Ahmed - Room 3</div>
      </div>
    ),
  },
  {
    industry: 'Community Center',
    title: 'Event & Activity Boards',
    problem: 'Community centers struggle to keep members informed about programs, schedules, and announcements.',
    solution: 'Display activity schedules, event calendars, community announcements, and emergency info on lobby screens.',
    screenBg: 'from-orange-900 to-orange-950',
    screenContent: (
      <div className="p-5 text-white text-center">
        <div className="text-[10px] text-orange-300 uppercase">Community Center</div>
        <div className="text-sm font-bold mb-2">This Week</div>
        <div className="text-[10px] bg-orange-800/40 rounded p-2">Yoga - Mon/Wed 6PM</div>
      </div>
    ),
  },
  {
    industry: 'Events',
    title: 'Conference Signage',
    problem: 'Printed event schedules are static and can not reflect last-minute changes to sessions or rooms.',
    solution: 'Display live event schedules, speaker info, wayfinding, and sponsor messages across venue screens.',
    screenBg: 'from-indigo-900 to-violet-950',
    screenContent: (
      <div className="p-5 text-white text-center">
        <div className="text-[10px] text-indigo-300 font-bold">TechSummit 2026</div>
        <div className="text-sm font-bold mb-2">Schedule</div>
        <div className="text-[10px] flex justify-between bg-indigo-800/40 rounded p-2">
          <span>10:00 AM Keynote</span>
          <span className="text-red-400 font-bold">NOW</span>
        </div>
      </div>
    ),
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-bg-soft to-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader
            badge="Use Cases"
            title="Built for Every Industry"
            subtitle="See how businesses across industries use Displira to communicate, engage, and inform."
          />
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          {useCases.map((uc, i) => (
            <RevealOnScroll key={uc.industry}>
              <div className={`flex flex-col md:flex-row gap-8 items-stretch ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Text */}
                <div className="flex-1 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full w-fit mb-3">
                    {uc.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-text mb-4">{uc.title}</h3>
                  <div className="mb-3">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-red-500 text-sm mt-0.5">&#10005;</span>
                      <p className="text-sm text-text-secondary">{uc.problem}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500 text-sm mt-0.5">&#10003;</span>
                      <p className="text-sm text-text-secondary">{uc.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Screen Preview */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-xl border border-white/10">
                    <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-between">
                      <div className="text-[9px] text-gray-400">{uc.industry}</div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    </div>
                    <div className={`bg-gradient-to-br ${uc.screenBg} aspect-video flex items-center justify-center`}>
                      {uc.screenContent}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
