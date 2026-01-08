import React from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  FileText, 
  Ship, 
  ClipboardList, 
  Search, 
  ChevronDown
} from 'lucide-react'; // Using Lucide for clean icons

const SidebarItem = ({ icon: Icon, label, arrow = true, active = false } : any) => (
  <div className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all ${
    active ? 'bg-[#F9F9F9] text-blue-600 ' : 'text-gray-600 hover:bg-gray-50'
  }`}>
    <div className="flex items-center gap-3">
      <Icon size={18} />
      <span className="text-sm font-medium">{label}</span>
    </div>
    {arrow && <ChevronDown size={16} className={active ? "text-blue-600" : "text-gray-400"} />}
  </div>
);

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-[#F8FAFC]">
      {/* Sidebar */}
      <aside className="w-[288px] p-4 bg-white border-r border-gray-200 flex flex-col">
        <div className='min-w-[256px] h-screen m-auto'>
        <div className="">
          <div className="flex items-center gap-2">
            <div className="font-bold text-7xl"><span className='text-[#5583F7]'>3</span><span className='text-[#95ED85]'>S</span> </div>
            <h1 className="text-2xl pt-2 text-slate-800 leading-tight">
              SMART SHIP <br/> SOLUTIONS
            </h1>
          </div>
          <div className='border w-[230px] m-auto mt-3 opacity-10'></div>
        </div>

        <nav className="flex-1 mt-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" /> 
          <SidebarItem icon={ClipboardList} label="Planned Maintenance" />
          <SidebarItem icon={FileText} label="Spares Inventory" />
          <SidebarItem icon={LayoutDashboard} label="Machinery Running Hrs" />
          <SidebarItem icon={ClipboardList} label="Lube Oil Summary" />
          <SidebarItem icon={FileText} label="Library" />
          <SidebarItem icon={LayoutDashboard} label="PMS Calender" arrow={false} />
          <SidebarItem icon={ClipboardList} label="User Management Roles" />
          <SidebarItem icon={FileText} label="Reports" />
          <SidebarItem icon={Ship} label="Fleet Management" active={true} arrow={false}/>
          <SidebarItem icon={Settings} label="Settings" />
        </nav>

        <div className="p-4 absolute bottom-2 border-t border-gray-100">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-50">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">SA</div>
            <div>
              <p className="text-xs font-bold">shadcn</p>
              <p className="text-[10px] text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Breadcrumbs & Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-2 text-sm opacity-50">
            <span>Fleet management</span>
            <span>/</span>
            <span>Sagar Kanya</span>
            <span>/</span>
            <span className="text-blue-600 font-semibold">Vessel Hierarchy Tree</span>
          </div>
        </header>

        {/* Tree Container */}
        <section className="flex-1 p-6 overflow-hidden relative">
          <div className="w-full h-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            {/* Search Bar inside the Canvas area */}
            <div className="p-4 border-b border-gray-100 flex items-center gap-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
            
            {/* React Flow Component goes here */}
            <div className="flex-1 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}