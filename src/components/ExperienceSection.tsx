import React, { useState } from 'react';
import { ExperienceItem } from '../types';
import { Briefcase, GraduationCap, Award, MapPin, Calendar, ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  const [filterType, setFilterType] = useState<'all' | 'work' | 'education' | 'award'>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'exp-1': true,
    'exp-2': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredExperiences = experiences.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-indigo-600" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-emerald-600" />;
      case 'award':
        return <Award className="w-4 h-4 text-amber-600" />;
      default:
        return <Briefcase className="w-4 h-4 text-indigo-600" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return '工作經歷';
      case 'education':
        return '學歷背景';
      case 'award':
        return '認證與榮譽';
      default:
        return '';
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-slate-200/80 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1.5 font-mono">
              02 / Chronology & Career
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              學經歷時序
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              完整梳理歷年專業任職、專案交付成果、學術學位與權威認證。
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              全部 ({experiences.length})
            </button>
            <button
              onClick={() => setFilterType('work')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterType === 'work'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              工作經歷 ({experiences.filter((e) => e.type === 'work').length})
            </button>
            <button
              onClick={() => setFilterType('education')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterType === 'education'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              學歷 ({experiences.filter((e) => e.type === 'education').length})
            </button>
            <button
              onClick={() => setFilterType('award')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                filterType === 'award'
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              證照/榮譽 ({experiences.filter((e) => e.type === 'award').length})
            </button>
          </div>
        </div>

        {/* Timeline Flow */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-8 ml-2 sm:ml-4">
          {filteredExperiences.map((item) => {
            const isExpanded = expandedIds[item.id] !== false;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border-2 border-indigo-600 shadow-sm flex items-center justify-center">
                  {getBadgeIcon(item.type)}
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {getTypeLabel(item.type)}
                        </span>
                        {item.current && (
                          <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                            現職 / 現任
                          </span>
                        )}
                        {item.department && (
                          <span className="text-xs text-slate-500">• {item.department}</span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {item.role}
                      </h3>

                      <div className="text-sm font-semibold text-indigo-600 mt-0.5">
                        {item.organization}
                      </div>
                    </div>

                    {/* Metadata & Actions */}
                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 text-xs text-slate-500">
                      <div className="flex items-center gap-1 font-mono font-medium text-slate-600">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Expandable Achievements Details */}
                  {item.achievements.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors mb-2.5 cursor-pointer"
                      >
                        <span>關鍵成果與量化成效 ({item.achievements.length} 項)</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {isExpanded && (
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                          {item.achievements.map((ach, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Tech stack badges */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono text-slate-400 mr-1">使用技術:</span>
                      {item.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-xs font-mono font-medium text-slate-600 bg-slate-100 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
