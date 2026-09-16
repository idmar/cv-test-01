import React from 'react';
import { UserProfile } from '../types';
import { ShieldCheck, Sparkles, Users, TrendingUp, Heart, Code, Eye, Languages, CheckCircle2, Award } from 'lucide-react';

interface AboutSectionProps {
  profile: UserProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-sky-600" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-rose-600" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-teal-600" />;
      default:
        return <Award className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1.5 font-mono">
            01 / Profile & Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            關於我與專業堅持
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            深入了解我的工程研發背景、架構哲學與跨職能協作準則。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Narrative & Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              {profile.about.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Philosophy Cards */}
            <div className="pt-4">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span>核心工作價值觀 (Core Working Values)</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.values.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-white shadow-2xs border border-slate-100">
                        {getIcon(v.iconName)}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{v.title}</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Languages & Key Differentiators */}
          <div className="lg:col-span-5 space-y-6">
            {/* Languages card */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Languages className="w-4 h-4 text-indigo-600" />
                  <span>語言能力 (Language Proficiency)</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">CEFR / TOEIC</span>
              </div>

              <div className="space-y-4">
                {profile.languages.map((lang, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-800">{lang.language}</span>
                      <span className="text-slate-500 font-mono text-[11px]">{lang.level}</span>
                    </div>
                    <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Highlights checklist */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>工程實踐守則 (Engineering Practices)</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Clean Architecture & 嚴格型別：</strong>推動全面型別安全與防禦性編程。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>自動化測試優先：</strong>單元測試、整合測試與端到端 E2E 測試覆蓋率 85%+。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>持續交付與可觀測性：</strong>Trunk-based 開發搭配全鏈路 OpenTelemetry 監控。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>透明技術決策：</strong>堅持撰寫 ADR (架構決策紀錄) 與工程文檔同步更新。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
