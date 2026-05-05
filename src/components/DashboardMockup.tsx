'use client';

import RevealOnScroll from './RevealOnScroll';

export default function DashboardMockup() {
  return (
    <RevealOnScroll className="w-full max-w-4xl mx-auto">
      <div className="rounded-xl overflow-hidden shadow-2xl border border-border">
        {/* Browser Chrome */}
        <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md px-3 py-1 text-xs text-text-light text-center">
              admin.displira.com/dashboard
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex bg-white min-h-[340px]">
          {/* Sidebar */}
          <div className="w-48 bg-bg-dark p-4 hidden md:flex flex-col gap-1">
            <div className="text-primary font-bold text-sm mb-4">Displira</div>
            {['Dashboard', 'Screens', 'Content', 'Devices', 'Schedule', 'Analytics'].map((item, i) => (
              <div
                key={item}
                className={`px-3 py-2 rounded-lg text-xs font-medium ${
                  i === 0 ? 'bg-primary/20 text-primary-light' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Main Area */}
          <div className="flex-1 p-5">
            <div className="text-sm font-semibold text-text mb-4">Dashboard Overview</div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
              {[
                { label: 'Active Screens', value: '24', color: 'text-primary' },
                { label: 'Online Devices', value: '22', color: 'text-green-500' },
                { label: 'Content Items', value: '56', color: 'text-blue-500' },
                { label: 'Locations', value: '8', color: 'text-purple-500' },
              ].map((stat) => (
                <div key={stat.label} className="bg-bg-soft rounded-lg p-3">
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-[10px] text-text-light">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Activity Feed */}
            <div className="text-xs font-medium text-text mb-2">Recent Activity</div>
            <div className="flex flex-col gap-2">
              {[
                { text: 'Menu Board updated — Lobby Screen', time: '2 min ago' },
                { text: 'Device FTV-003 reconnected', time: '15 min ago' },
                { text: 'Schedule "Happy Hour" activated', time: '1 hr ago' },
                { text: 'New screen paired — Store #5', time: '3 hr ago' },
              ].map((activity) => (
                <div key={activity.text} className="flex items-center justify-between bg-bg-soft rounded-lg px-3 py-2">
                  <span className="text-[11px] text-text-secondary">{activity.text}</span>
                  <span className="text-[10px] text-text-light whitespace-nowrap ml-2">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
