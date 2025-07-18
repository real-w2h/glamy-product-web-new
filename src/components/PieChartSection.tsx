import React from 'react';

const info = [
  {
    percent: '40%',
    title: 'Healthy Snacks',
    desc: 'Chips and crisps are a favorite among snack lovers for their crunchy texture and variety of flavors.',
    badgeColor: 'bg-[#22c55e]',
    cardBg: 'bg-[#e9e3fa]',
    badgeText: 'text-white',
    lineY: 120,
    cardY: 0,
  },
  {
    percent: '25%',
    title: 'Chips and Crisps',
    desc: 'Chips and crisps are a favorite among snack lovers for their crunchy texture and variety of flavors.',
    badgeColor: 'bg-[#22c55e]',
    cardBg: 'bg-[#fbeafd]',
    badgeText: 'text-white',
    lineY: 210,
    cardY: 140,
  },
  {
    percent: '35%',
    title: 'Chocolate and Sweets',
    desc: 'This category features a variety of chocolates and candies, including gummies, hard candies, and caramels.',
    badgeColor: 'bg-[#22c55e]',
    cardBg: 'bg-[#eceafd]',
    badgeText: 'text-white',
    lineY: 320,
    cardY: 280,
  },
];

export default function PieChartSection() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-white overflow-hidden min-h-screen">
      {/* Top left purple flower */}
      <img src="/attached_assets/icons33.png" alt="Purple Flower" className="absolute left-4 top-4 w-14 h-14 z-30" />
      {/* Bottom right pink flower */}
      <img src="/attached_assets/icon_1.png" alt="Pink Flower" className="absolute right-4 bottom-4 w-14 h-14 z-30" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Left: Pie Chart with overlays and lines */}
        <div className="relative flex items-center justify-center min-h-[500px]" style={{ paddingLeft: '20px' }}>
          {/* Pie Chart PNG */}
          <img src="/attached_assets/section_pie.png" alt="Pie Chart" className="w-[370px] h-[370px] object-contain z-10" />
        </div>
        {/* Right: Info Cards */}
        <div className="space-y-8">
          {/* Glame badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-pink-400 text-white rounded-full px-4 py-1 font-semibold text-lg">Glame</span>
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Salon CRM Feature Usage Breakdown</h2>
          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            {/* WhatsApp Marketing Blasts */}
            <div className="relative rounded-2xl shadow-md px-6 py-4 flex items-start gap-4 bg-[#e9e3fa]" style={{minHeight: 110}}>
              <div>
                <div className="font-bold text-xl mb-1 text-black" style={{fontWeight: 700}}>WhatsApp Marketing Blasts</div>
                <div className="text-gray-700 text-base font-normal">Salon owners actively use our WhatsApp broadcasting tool to send promotional messages, appointment reminders, and offers to clients — boosting re-engagement and loyalty.</div>
              </div>
            </div>
            {/* Appointment Management */}
            <div className="relative rounded-2xl shadow-md px-6 py-4 flex items-start gap-4 bg-[#fbeafd]" style={{minHeight: 110}}>
              <div>
                <div className="font-bold text-xl mb-1 text-black" style={{fontWeight: 700}}>Appointment Management</div>
                <div className="text-gray-700 text-base font-normal">Clients book and manage appointments easily through Glame's calendar, helping salon teams avoid scheduling conflicts and improve customer satisfaction.</div>
              </div>
            </div>
            {/* Sales & Analytics Tracking */}
            <div className="relative rounded-2xl shadow-md px-6 py-4 flex items-start gap-4 bg-[#eceafd]" style={{minHeight: 110}}>
              <div>
                <div className="font-bold text-xl mb-1 text-black" style={{fontWeight: 700}}>Sales & Analytics Tracking</div>
                <div className="text-gray-700 text-base font-normal">Real-time revenue insights, staff performance metrics, and monthly trend dashboards help salon owners make smarter business decisions.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 