'use client';

import RevealOnScroll from './RevealOnScroll';

const stats = [
  { label: 'TOTAL SCREENS', val: '12', sub: '8 registered', color: '#F97316' },
  { label: 'PUBLISHED', val: '9', sub: '3 unpublished', color: '#22C55E' },
  { label: 'DEVICES ONLINE', val: '7', sub: '85% uptime', color: '#3B82F6' },
  { label: 'CONTENT ITEMS', val: '34', sub: 'in library', color: '#8B5CF6' },
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

const sidebarNav = [
  { section: 'OVERVIEW', items: ['Dashboard'] },
  { section: 'MANAGEMENT', items: ['Screens & Layouts', 'Content Editor', 'Devices', 'Register Device', 'Pair Fire TV'] },
  { section: 'TEAM', items: ['Users & Roles'] },
  { section: 'OPERATIONS', items: ['Publish', 'Schedules', 'Themes', 'Reports'] },
];

export default function DashboardMockup() {
  const sidebarBg = '#1E2340';
  const borderLight = '#F3F4F6';
  const textLight = '#9CA3AF';
  const textSec = '#6B7280';

  return (
    <RevealOnScroll className="w-full max-w-[860px] mx-auto">
      <div style={{
        background: 'white', borderRadius: 16, border: '1px solid #E5E7EB',
        boxShadow: '0 24px 64px rgba(0,0,0,0.12)', overflow: 'hidden',
      }}>
        {/* Browser chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: `1px solid ${borderLight}`, background: '#F8F9FC' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: 10, background: '#FF5F57' }} />
            <span style={{ width: 10, height: 10, borderRadius: 10, background: '#FFBD2E' }} />
            <span style={{ width: 10, height: 10, borderRadius: 10, background: '#28C840' }} />
          </div>
          <span style={{ fontSize: 11, color: textLight, marginLeft: 8 }}>admin.displira.com/dashboard</span>
        </div>

        {/* App */}
        <div style={{ display: 'grid', gridTemplateColumns: '168px 1fr', minHeight: 380 }}>
          {/* Sidebar */}
          <div style={{ background: sidebarBg, padding: '12px 8px', display: 'flex', flexDirection: 'column' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px 12px' }}>
              <span style={{ width: 24, height: 24, borderRadius: 6, background: '#0D8A6A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: 'white' }}>D</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'white', lineHeight: 1.1 }}>Displira</div>
                <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>Admin Portal</div>
              </div>
            </div>
            {/* Nav */}
            {sidebarNav.map((group) => (
              <div key={group.section}>
                <div style={{ fontSize: 9, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.3)', padding: '12px 14px 4px', marginTop: 4 }}>
                  {group.section}
                </div>
                {group.items.map((item) => {
                  const active = item === 'Dashboard';
                  return (
                    <div key={item} style={{
                      padding: '7px 14px', borderRadius: 6, fontSize: 11.5, fontWeight: 500, marginBottom: 1,
                      whiteSpace: 'nowrap' as const,
                      color: active ? 'white' : 'rgba(255,255,255,0.55)',
                      background: active ? '#0D8A6A' : 'transparent',
                    }}>
                      {item}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div style={{ padding: '16px 20px', overflow: 'hidden' }}>
            {/* Breadcrumb */}
            <div style={{ fontSize: 10, color: textLight, marginBottom: 4 }}>
              Overview &nbsp;›&nbsp; <span style={{ color: '#111827' }}>Dashboard</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <div>
                <div style={{ fontSize: 17, fontWeight: 700, letterSpacing: '-0.01em' }}>Dashboard</div>
                <div style={{ fontSize: 10, color: textLight }}>Overview of your digital signage network</div>
              </div>
              <div style={{ fontSize: 10, color: textSec, display: 'flex', alignItems: 'center', gap: 4 }}>↻ Refresh</div>
            </div>

            {/* Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8, marginBottom: 20 }}>
              {stats.map((s) => (
                <div key={s.label} style={{ padding: '10px 12px', background: 'white', borderRadius: 8, border: `1px solid ${borderLight}`, borderTop: `2.5px solid ${s.color}` }}>
                  <div style={{ fontSize: 8, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.04em', color: s.color, marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: 9, color: textLight, marginTop: 2 }}>{s.sub}</div>
                  <div style={{ height: 3, borderRadius: 2, background: `${s.color}33`, marginTop: 8 }}>
                    <div style={{ width: '60%', height: '100%', borderRadius: 2, background: s.color }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Activity + sidebar */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 150px', gap: 16 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Recent Activity</div>
                {activity.map((a, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: `1px solid ${borderLight}` }}>
                    <span style={{ width: 6, height: 6, borderRadius: 6, background: a.dot, flexShrink: 0 }} />
                    <span style={{ fontSize: 10.5, color: '#111827', flex: 1 }}>
                      {a.text} <span style={{ color: textLight }}>{a.by}</span>
                    </span>
                    <span style={{ fontSize: 9, color: textLight, flexShrink: 0 }}>{a.time}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Quick Actions */}
                <div style={{ padding: 12, border: `1px solid ${borderLight}`, borderRadius: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 8 }}>Quick Actions</div>
                  {['+ New Screen', '+ Add Content', '↑ Publish All', '+ Invite User'].map((a) => (
                    <div key={a} style={{ fontSize: 10, padding: '5px 8px', border: `1px solid ${borderLight}`, borderRadius: 5, marginBottom: 4, color: textSec }}>{a}</div>
                  ))}
                </div>
                {/* Screen Health */}
                <div style={{ padding: 12, border: `1px solid ${borderLight}`, borderRadius: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 4 }}>Screen Health</div>
                  <div style={{ fontSize: 20, fontWeight: 700 }}>85%</div>
                  <div style={{ fontSize: 9, color: textLight }}>device uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
