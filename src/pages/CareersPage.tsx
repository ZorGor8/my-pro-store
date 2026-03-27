import { Rocket, Heart, Globe, ArrowRight } from 'lucide-react';

export const CareersPage = () => {
  const positions = [
    { title: "Frontend Developer", type: "Remote", department: "Engineering" },
    { title: "UI/UX Designer", type: "Hybrid", department: "Design" },
    { title: "Support Manager", type: "Full-time", department: "Customer Care" }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 animate-in fade-in duration-700">
      
      {/* 1. Hero Section */}
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-none">
          Build the <span className="text-blue-600">Future</span> with us
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We are looking for passionate individuals to join our remote-first team and redefine the global e-commerce experience.
        </p>
      </div>

      {/* 2. Perks (Почему мы) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="flex items-start gap-4">
          <div className="bg-blue-50 p-3 rounded-xl"><Globe className="text-blue-600" /></div>
          <div>
            <h4 className="font-bold text-lg mb-1">Remote First</h4>
            <p className="text-sm text-gray-500">Work from anywhere in the world. We value your output, not your desk location.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-pink-50 p-3 rounded-xl"><Heart className="text-pink-600" /></div>
          <div>
            <h4 className="font-bold text-lg mb-1">Health & Wellness</h4>
            <p className="text-sm text-gray-500">Full medical insurance and a monthly budget for your physical and mental health.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-orange-50 p-3 rounded-xl"><Rocket className="text-orange-600" /></div>
          <div>
            <h4 className="font-bold text-lg mb-1">Growth Budget</h4>
            <p className="text-sm text-gray-500">An annual budget for courses, conferences, and any books you want to read.</p>
          </div>
        </div>
      </div>

      {/* 3. Open Positions */}
      <div className="bg-white rounded-[3rem] border border-gray-100 p-12 shadow-sm">
        <h2 className="text-3xl font-black mb-10">Open Positions</h2>
        <div className="space-y-4">
          {positions.map((pos, index) => (
            <div key={index} className="flex items-center justify-between p-6 rounded-2xl border border-gray-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all group cursor-pointer">
              <div>
                <h4 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">{pos.title}</h4>
                <div className="flex gap-3 mt-1">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{pos.department}</span>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">• {pos.type}</span>
                </div>
              </div>
              <ArrowRight className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};