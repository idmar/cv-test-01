import React from 'react';
import { UserProfile } from '../types';
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Printer, X } from 'lucide-react';

interface PrintResumeViewProps {
  profile: UserProfile;
  onClose: () => void;
}

export const PrintResumeView: React.FC<PrintResumeViewProps> = ({ profile, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-2 sm:p-6 print:p-0 print:bg-white print:static print:inset-auto">
      {/* Control bar (hidden during print) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/95 backdrop-blur shadow-lg border border-slate-200 px-4 py-2.5 rounded-full print:hidden">
        <span className="text-xs text-slate-600 font-medium hidden sm:inline">A4 履歷預覽模式</span>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-full transition-colors cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5" />
          列印 / 另存為 PDF
        </button>
        <button
          onClick={onClose}
          className="p-1.5 text-slate-500 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          title="關閉預覽"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Printable Sheet */}
      <div className="w-full max-w-4xl bg-white text-slate-900 shadow-2xl rounded-xl p-6 sm:p-10 my-8 sm:my-10 print:shadow-none print:m-0 print:p-8 print:w-full print:max-w-none print:rounded-none">
        {/* Header */}
        <header className="border-b border-slate-300 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                {profile.name} <span className="text-lg font-normal text-slate-500 ml-2">({profile.nameEn})</span>
              </h1>
              <p className="text-base font-semibold text-slate-700 mt-1">{profile.title}</p>
              <p className="text-xs text-slate-500 mt-0.5">{profile.titleEn}</p>
            </div>
            <div className="text-xs space-y-1 text-slate-600 sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-2 text-slate-500">
                <span>年資: {profile.yearsOfExp} 年</span>
                <span>•</span>
                <span>GitHub / LinkedIn</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded border border-slate-200">
            {profile.tagline}
          </p>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
            專業摘要 (Professional Summary)
          </h2>
          <div className="space-y-1.5 text-xs text-slate-700 leading-relaxed">
            {profile.about.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
            經歷時序 (Work Experience & Education)
          </h2>
          <div className="space-y-4">
            {profile.experiences.map((exp) => (
              <div key={exp.id} className="text-xs">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900 text-sm">
                    {exp.role} <span className="text-slate-600 font-normal">| {exp.organization}</span>
                  </span>
                  <span className="text-slate-500 font-medium">{exp.period}</span>
                </div>
                <p className="text-slate-600 mt-1 italic">{exp.summary}</p>
                <ul className="list-disc list-outside ml-4 mt-1.5 space-y-1 text-slate-700">
                  {exp.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
                {exp.skills && exp.skills.length > 0 && (
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Core Skills */}
        <section className="mb-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
            技能專長 (Core Competencies)
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
            {profile.skills.slice(0, 12).map((sk) => (
              <div key={sk.id} className="flex justify-between items-center py-0.5 border-b border-slate-100">
                <span className="font-medium text-slate-800">{sk.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-500">{sk.years}年</span>
                  <div className="w-16 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-700 h-full" style={{ width: `${sk.level}%` }}></div>
                  </div>
                  <span className="font-mono text-[10px] text-slate-600 w-6 text-right">{sk.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
            代表專案作品 (Key Project Highlights)
          </h2>
          <div className="space-y-3 text-xs">
            {profile.projects.slice(0, 3).map((proj) => (
              <div key={proj.id} className="border-l-2 border-slate-300 pl-3">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-slate-900">{proj.title}</span>
                  <span className="text-slate-500">{proj.period}</span>
                </div>
                <p className="text-slate-600 mt-0.5">{proj.summary}</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {proj.technologies.slice(0, 6).map((tech, i) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-1 py-0.2 rounded font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
