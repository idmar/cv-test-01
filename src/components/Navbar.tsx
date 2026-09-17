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
      <div className="w-full bg-white/10 h-0.5 relative">
        <div
          className="h-full bg-[var(--coffee)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        id="main-navbar"
        className={`w-full px-4 sm:px-8 transition-colors duration-200 ${
          isScrolled
            ? 'bg-[#12110f]/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)] border-b border-white/10 py-3'
            : 'bg-[#12110f]/80 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-[1848px] mx-auto flex items-center justify-between gap-4">
          {/* Brand / Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-[var(--coffee)] text-[#171411] font-black flex items-center justify-center text-sm shadow-sm group-hover:brightness-110 transition-colors display-font">
                {currentProfile.name.slice(0, 1)}
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight group-hover:text-[var(--coffee-soft)] transition-colors display-font tracking-[-0.08em]">
                  {currentProfile.name}
                </div>
                <div className="text-[11px] text-stone-300 mono-font leading-tight uppercase tracking-[0.08em]">
                  {currentProfile.nameEn} • {currentProfile.yearsOfExp} YOE
                </div>
              </div>
            </button>

            {/* Profile switcher pill */}
            <div className="relative ml-2 hidden md:block">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] text-stone-200 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors cursor-pointer mono-font uppercase tracking-[0.12em]"
                title="切換不同職缺模板履歷"
              >
                <UserCheck className="w-3 h-3 text-[var(--coffee-soft)]" />
                <span className="max-w-[110px] truncate">{currentProfile.title.split('&')[0]}</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
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
          <div className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 text-[10px] mono-font uppercase tracking-[0.14em] rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#171411] shadow-xs font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
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
              className="inline-flex items-center gap-1 px-3 py-1.5 text-[10px] mono-font uppercase tracking-[0.12em] text-stone-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors cursor-pointer"
              title="編輯或修改當前履歷資訊"
            >
              <Edit3 className="w-3.5 h-3.5 text-[var(--coffee-soft)]" />
              <span>自訂編輯</span>
            </button>

            <button
              onClick={onOpenPrint}
              className="action-btn inline-flex items-center gap-1 px-3.5 py-1.5 text-[10px] mono-font uppercase tracking-[0.12em] rounded-full shadow-xs transition-colors cursor-pointer"
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
              className="p-2 text-stone-200 hover:text-white rounded-full border border-white/10 bg-white/5"
              title="匯出"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-white rounded-full border border-white/10 bg-white/5 focus:outline-none"
              aria-label="開啟導覽選單"
            >
              <span className={`dot-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-white/10 mt-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col gap-1 mb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-white text-[#171411] font-semibold'
                      : 'text-stone-200 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <div className="text-[11px] font-medium text-stone-400 px-1">切換範例檔案</div>
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
                        ? 'border-[var(--color-red)] bg-[var(--color-red)] text-white font-semibold'
                        : 'border-white/10 text-stone-200 hover:bg-white/10 hover:text-white'
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
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-stone-200 bg-white/10 border border-white/10 rounded-lg hover:bg-white/15"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  自訂資料
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPrint();
                  }}
                  className="action-btn flex-1 inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg"
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
