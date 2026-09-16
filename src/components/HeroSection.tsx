import React, { useState } from 'react';
import { UserProfile } from '../types';
import { MapPin, Mail, Phone, ArrowUpRight, Github, Linkedin, Globe, Check, Copy, Download, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  profile: UserProfile;
  onOpenPrint: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenPrint }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-slate-200/80 bg-linear-to-b from-slate-100/60 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top availability badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{profile.statusText}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-slate-600 bg-white border border-slate-200">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Bio and Title */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              <div className="inline-block text-xs font-mono font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-2.5 py-1 rounded">
                {profile.titleEn}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                {profile.name}
                <span className="text-2xl sm:text-4xl lg:text-5xl font-normal text-slate-400 ml-3 font-mono">
                  {profile.nameEn}
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-700 leading-snug pt-1">
                {profile.title}
              </p>

              <p className="text-base text-slate-600 leading-relaxed max-w-3xl pt-2">
                {profile.tagline}
              </p>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <span>聯絡我 / 洽談合作</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-medium text-sm rounded-lg border border-slate-300 transition-colors cursor-pointer"
              >
                <span>檢視代表作品</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={onOpenPrint}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>PDF 履歷預覽</span>
              </button>
            </div>

            {/* Social & Contact Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              {/* Copy Email Button */}
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-white border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                title="點擊複製 Email"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 opacity-60" />
                )}
              </button>

              {/* Copy Phone Button */}
              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-white border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                title="點擊複製電話號碼"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 opacity-60" />
                )}
              </button>

              <div className="h-4 w-px bg-slate-200 hidden sm:block" />

              {/* External Links */}
              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-600" />
                  <span>LinkedIn</span>
                </a>

                {profile.blog && (
                  <a
                    href={profile.blog}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-indigo-600" />
                    <span>技術專欄</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats Card Grid */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  專業量化指標 (Key Metrics)
                </div>
                <div className="text-[11px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                  Verified
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {profile.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100/80">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-700 mt-1">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                      {stat.hint}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>職涯年資總覽</span>
                <span className="font-semibold text-slate-800">{profile.yearsOfExp} 年專業實務</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
