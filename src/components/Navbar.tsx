import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { PROFILES } from '../data/initialData';
import { Menu, X, Printer, Edit3, ChevronDown, UserCheck } from 'lucide-react';

interface NavbarProps {
  currentProfile: UserProfile;
  onSelectProfile: (profile: UserProfile) => void;
  onOpenEditor: () => void;
  onOpenPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfile,
  onSelectProfile,
  onOpenEditor,
  onOpenPrint,
}) => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setIsScrolled(winScroll > 20);

      // Section spy
      const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: '關於我' },
    { id: 'experience', label: '學經歷' },
    { id: 'skills', label: '技能專長' },
    { id: 'projects', label: '專案作品' },
    { id: 'contact', label: '聯絡方式' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Scroll Reading Progress Bar */}
      <div className="w-full bg-slate-200/40 h-0.5 relative">
        <div
          className="h-full bg-indigo-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        id="main-navbar"
        className={`w-full px-4 sm:px-8 transition-colors duration-200 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/60 backdrop-blur-sm border-b border-slate-200/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand / Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm group-hover:bg-indigo-700 transition-colors">
                {currentProfile.name.slice(0, 1)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                  {currentProfile.name}
                </div>
                <div className="text-[11px] text-slate-500 font-mono leading-tight">
                  {currentProfile.nameEn} • {currentProfile.yearsOfExp} YOE
                </div>
              </div>
            </button>

            {/* Profile switcher pill */}
            <div className="relative ml-2 hidden md:block">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 transition-colors cursor-pointer"
                title="切換不同職缺模板履歷"
              >
                <UserCheck className="w-3 h-3 text-slate-500" />
                <span className="max-w-[110px] truncate">{currentProfile.title.split('&')[0]}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {profileDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setProfileDropdownOpen(false)}
                  />
                  <div className="absolute left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl py-1.5 z-20 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      範例人物模板
                    </div>
                    {PROFILES.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onSelectProfile(p);
                          setProfileDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                          p.id === currentProfile.id ? 'bg-indigo-50/70 text-indigo-700 font-semibold' : 'text-slate-700'
                        }`}
                      >
                        <div>
                          <div className="font-medium">{p.name} ({p.nameEn})</div>
                          <div className="text-[11px] text-slate-500">{p.title}</div>
                        </div>
                        {p.id === currentProfile.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-indigo-700 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onOpenEditor}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
              title="編輯或修改當前履歷資訊"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-500" />
              <span>自訂編輯</span>
            </button>

            <button
              onClick={onOpenPrint}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs transition-colors cursor-pointer"
              title="列印為紙本履歷或儲存為 PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>匯出履歷</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={onOpenPrint}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg border border-slate-200"
              title="匯出"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none"
              aria-label="開啟導覽選單"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-slate-200/80 mt-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-1 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-indigo-50 text-indigo-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <div className="text-[11px] font-medium text-slate-400 px-1">切換範例檔案</div>
              <div className="grid grid-cols-2 gap-1.5">
                {PROFILES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectProfile(p);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-2.5 py-1.5 rounded-lg text-xs border ${
                      p.id === currentProfile.id
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                        : 'border-slate-200 text-slate-700'
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEditor();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-slate-700 bg-slate-100 rounded-lg"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  自訂資料
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPrint();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg"
                >
                  <Printer className="w-3.5 h-3.5" />
                  列印 / PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
