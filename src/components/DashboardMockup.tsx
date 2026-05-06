'use client';

import RevealOnScroll from './RevealOnScroll';

const stats = [
  { label: 'TOTAL SCREENS', val: '12', sub: '8 registered', color: '#F97316' },
  { label: 'PUBLISHED SCREENS', val: '9', sub: '3 unpublished', color: '#22C55E' },
  { label: 'DEVICES ONLINE', val: '7', sub: '85% uptime', color: '#3B82F6' },
  { label: 'CONTENT ITEMS', val: '34', sub: 'items in library', color: '#8B5CF6' },
  { label: 'TOTAL DEVICES', val: '8', sub: '1 offline', color: '#EAB308' },
];

const activity = [
  { dot: '#F97316', text: 'Content "Welcome Message" updated', by: 'by Demo', time: '6m ago' },
  { dot: '#F97316', text: 'Content "Hours & Info" updated', by: 'by Demo', time: '6m ago' },
  { dot: '#F97316', text: 'Content "Store Announcements" updated', by: 'by Demo', time: '6m ago' },
  { dot: '#22C55E', text: 'Content "Daily Specials" updated', by: 'by Demo', time: '7m ago' },
  { dot: '#22C55E', text: 'Content "Welcome & Promotions" updated', by: 'by Demo', time: '7m ago' },
  { dot: '#3B82F6', text: 'Screen "Main Entrance" published', by: 'by Demo', time: '20m ago' },
];

const sidebarSections: { label: string; items: { name: string; active?: boolean }[] }[] = [
  { label: 'OVERVIEW', items: [{ name: 'Dashboard', active: true }] },
  { label: 'MANAGEMENT', items: [
    { name: 'Screens & Layouts' }, { name: 'Content Editor' }, { name: 'Devices' },
    { name: 'Register Device' }, { name: 'Pair Fire TV' },
  ]},
  { label: 'TEAM', items: [{ name: 'Users & Roles' }] },
  { label: 'OPERATIONS', items: [
    { name: 'Publish' }, { name: 'Schedules' }, { name: 'Themes' }, { name: 'Reports' },
  ]},
];

const quickActions = ['+ New Screen', '+ Add Content', '↑ Publish All', '+ Invite User'];

export default function DashboardMockup() {
  return (
    <RevealOnScroll className="w-full max-w-[860px] mx-auto">
      <div className="rounded-2xl overflow-hidden border border-border" style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
        {/* Browser Chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border-light" style={{ background: '#F8F9FC' }}>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
          </div>
          <span className="text-[11px] text-text-light ml-2">admin.displira.com/dashboard</span>
        </div>

        {/* App Grid */}
        <div className="grid md:grid-cols-[168px_1fr] bg-white" style={{ minHeight: 380 }}>
          {/* Sidebar */}
          <div className="hidden md:flex flex-col p-2" style={{ background: '#1E2340' }}>
            {/* Logo */}
            <div className="flex items-center gap-2 px-2 pt-1 pb-3">
              <span className="w-6 h-6 rounded-md flex items-center justify-center text-[12px] font-extrabold text-white" style={{ background: '#0D8A6A' }}>D</span>
              <div>
                <div className="text-[12px] font-bold text-white leading-tight">Displira</div>
                <div className="text-[8px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Admin Portal</div>
              </div>
            </div>

            {/* Nav Items */}
            {sidebarSections.map((section) => (
              <div key={section.label}>
                <div className="uppercase tracking-wider px-3.5 mt-1" style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', paddingTop: 12, paddingBottom: 4 }}>
                  {section.label}
                </div>
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-md mb-px whitespace-nowrap"
                    style={{
                      padding: '7px 14px',
                      fontSize: 11.5,
                      fontWeight: 500,
                      color: item.active ? 'white' : 'rgba(255,255,255,0.55)',
                      background: item.active ? '#0D8A6A' : 'transparent',
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="p-4 md:px-5 md:py-4 overflow-hidden">
            {/* Breadcrumb */}
            <div className="text-[10px] text-text-light mb-1">
              Overview &nbsp;›&nbsp; <span className="text-text">Dashboard</span>
            </div>

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="text-[17px] font-bold tracking-tight">Dashboard</div>
                <div className="text-[10px] text-text-light">Overview of your digital signage network</div>
              </div>
              <div className="text-[10px] text-text-secondary flex items-center gap-1">↻ Refresh</div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-5">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border-light bg-white" style={{ padding: '10px 12px', borderTop: `2.5px solid ${s.color}` }}>
                  <div className="uppercase tracking-wide mb-1.5" style={{ fontSize: 8, fontWeight: 600, letterSpacing: '0.04em', color: s.color }}>{s.label}</div>
                  <div className="text-[22px] font-bold tracking-tight leading-none">{s.val}</div>
                  <div className="text-[9px] text-text-light mt-0.5">{s.sub}</div>
                  <div className="rounded-sm mt-2" style={{ height: 3, background: `${s.color}33` }}>
                    <div className="rounded-sm" style={{ width: '60%', height: '100%', background: s.color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Activity + Quick Actions */}
            <div className="grid md:grid-cols-[1fr_150px] gap-4">
              {/* Activity Feed */}
              <div>
                <div className="text-[13px] font-semibold mb-2.5">Recent Activity</div>
                {activity.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 border-b border-border-light">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: a.dot }} />
                    <span className="text-[10.5px] text-text flex-1">
                      {a.text} <span className="text-text-light">{a.by}</span>
                    </span>
                    <span className="text-[9px] text-text-light shrink-0">{a.time}</span>
                  </div>
                ))}
              </div>

              {/* Right Panel */}
              <div className="hidden md:flex flex-col gap-3">
                {/* Quick Actions */}
                <div className="border border-border-light rounded-lg p-3">
                  <div className="text-[11px] font-semibold mb-2">Quick Actions</div>
                  {quickActions.map((a) => (
                    <div key={a} className="text-[10px] px-2 py-1.5 border border-border-light rounded mb-1 text-text-secondary">{a}</div>
                  ))}
                </div>

                {/* Screen Health */}
                <div className="border border-border-light rounded-lg p-3">
                  <div className="text-[11px] font-semibold mb-1">Screen Health</div>
                  <div className="text-[20px] font-bold">85%</div>
                  <div className="text-[9px] text-text-light">device uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
