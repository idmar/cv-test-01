import React, { useState, useMemo } from 'react';
import { SkillItem, SkillCategory } from '../types';
import { Search, Code2, Database, Cloud, Layers, Check, Sparkles, Filter } from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'progress' | 'grid'>('progress');

  const categories = [
    { id: 'all', label: '全部技能', icon: Layers },
    { id: 'frontend', label: '前端開發', icon: Code2 },
    { id: 'backend', label: '後端與資料庫', icon: Database },
    { id: 'devops', label: '雲端與 DevOps', icon: Cloud },
    { id: 'architecture', label: '系統架構與管理', icon: Sparkles },
  ];

  const filteredSkills = useMemo(() => {
    return skills.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchQuery =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQuery;
    });
  }, [skills, selectedCategory, searchQuery]);

  const getLevelLabel = (level: number) => {
    if (level >= 95) return { text: '精通 Expert', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
    if (level >= 85) return { text: '熟練 Proficient', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
    return { text: '良好 Competent', color: 'bg-slate-100 text-slate-700 border-slate-200' };
  };

  // Competency overview dimensions
  const competencies = [
    { name: '分散式架構與微服務', score: 94, desc: '事件驅動、Saga、容錯降級' },
    { name: '現代前端與效能工程', score: 96, desc: 'SSR、Core Web Vitals、微前端' },
    { name: '後端高併發與資料存取', score: 92, desc: 'Go、Node.js、Kafka、SQL調優' },
    { name: '雲原生與容器編排', score: 90, desc: 'K8s、Docker、AWS、IaC 自動化' },
    { name: '技術領導與工程文化', score: 90, desc: '敏捷教練、Code Review、人才培訓' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1.5 font-mono">
            03 / Expertise & Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            技能專長與專業維度
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            結合客觀熟練百分比、年資深度與核心應用場景之視覺化技能矩陣。
          </p>
        </div>

        {/* Competency Radar / Overview Dashboard Block */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
                Core Competency Evaluation
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                綜合架構能力維度評估
              </h3>
            </div>
            <div className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60 self-start">
              依據 8 年+ 實際專案交付表現綜合計算
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {competencies.map((comp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs font-semibold text-slate-200">{comp.name}</span>
                    <span className="text-sm font-mono font-bold text-indigo-400">{comp.score}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-linear-to-r from-indigo-500 to-indigo-400 rounded-full"
                      style={{ width: `${comp.score}%` }}
                    />
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {comp.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-white text-indigo-700 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input & View Mode */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜尋技能或技術..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="hidden sm:flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 text-xs">
              <button
                onClick={() => setViewMode('progress')}
                className={`px-2.5 py-1 rounded font-medium cursor-pointer ${
                  viewMode === 'progress' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-500'
                }`}
              >
                指標條
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded font-medium cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-500'
                }`}
              >
                矩陣卡片
              </button>
            </div>
          </div>
        </div>

        {/* Skill Items Display */}
        {filteredSkills.length === 0 ? (
          <div className="py-12 text-center text-slate-500 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <p className="text-sm">沒有找到符合「{searchQuery}」的技能項目</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-semibold text-indigo-600 hover:underline cursor-pointer"
            >
              清除所有篩選條件
            </button>
          </div>
        ) : viewMode === 'progress' ? (
          /* Progress View */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => {
              const badge = getLevelLabel(skill.level);

              return (
                <div
                  key={skill.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-200/70 text-slate-600">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-500 mt-0.5">{skill.description}</p>
                      )}
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badge.color}`}>
                        {badge.text}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 mt-0.5">
                        {skill.years} 年實戰
                      </span>
                    </div>
                  </div>

                  {/* Meter */}
                  <div className="space-y-1 mt-2">
                    <div className="flex justify-between text-[11px] font-mono text-slate-500">
                      <span>熟練指數</span>
                      <span className="font-semibold text-slate-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Grid Card Matrix View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => {
              const badge = getLevelLabel(skill.level);

              return (
                <div
                  key={skill.id}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-slate-400">
                        {skill.years} YOE
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badge.color}`}>
                        {badge.text}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1">{skill.name}</h4>
                    {skill.tag && (
                      <span className="inline-block text-[11px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded mb-2">
                        {skill.tag}
                      </span>
                    )}

                    {skill.description && (
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-500">評級指數</span>
                      <span className="font-bold text-slate-800">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
