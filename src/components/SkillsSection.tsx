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
    if (level >= 95) return { text: '精通 Expert', color: 'skill-level-badge expert' };
    if (level >= 85) return { text: '熟練 Proficient', color: 'skill-level-badge proficient' };
    return { text: '良好 Competent', color: 'skill-level-badge competent' };
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
    <section id="skills" className="section-shell dark">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-kicker">03 / Expertise & Competencies</div>
            <h2 className="section-heading">技能專長與專業維度</h2>
          </div>
          <p className="section-subtitle">
            結合客觀熟練百分比、年資深度與核心應用場景之視覺化技能矩陣。
          </p>
        </div>

        <div className="mb-12 p-6 sm:p-8 rounded-[1.7rem] bg-white/4 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
            <div>
              <span className="text-[10px] mono-font uppercase tracking-[0.16em] text-[var(--coffee-soft)]">
                Core Competency Evaluation
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                綜合架構能力維度評估
              </h3>
            </div>
            <div className="text-[10px] mono-font uppercase tracking-[0.12em] text-stone-300 bg-white/5 px-3 py-1 rounded-full border border-white/10 self-start">
              依據 8 年+ 實際專案交付表現綜合計算
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {competencies.map((comp, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/4 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-2 gap-2">
                    <span className="text-xs font-semibold text-slate-200">{comp.name}</span>
                    <span className="text-sm font-mono font-bold text-[var(--coffee-soft)]">{comp.score}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-[linear-gradient(90deg,#f0b57a_0%,#d88943_100%)] rounded-full"
                      style={{ width: `${comp.score}%` }}
                    />
                  </div>
                </div>
                <div className="text-[11px] text-stone-300 leading-tight">
                  {comp.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 rounded-full border border-white/10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] mono-font uppercase tracking-[0.12em] rounded-full transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-white text-[#171411] shadow-2xs'
                      : 'text-stone-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜尋技能或技術..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white/5 border border-white/10 rounded-full text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[var(--coffee-soft)] focus:bg-white/10 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="hidden sm:flex items-center p-1 bg-white/5 rounded-full border border-white/10 text-xs">
              <button
                onClick={() => setViewMode('progress')}
                className={`px-2.5 py-1 rounded-full mono-font uppercase tracking-[0.12em] text-[9px] cursor-pointer ${
                  viewMode === 'progress' ? 'bg-white text-[#171411] shadow-2xs font-semibold' : 'text-stone-300'
                }`}
              >
                指標條
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-full mono-font uppercase tracking-[0.12em] text-[9px] cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white text-[#171411] shadow-2xs font-semibold' : 'text-stone-300'
                }`}
              >
                矩陣卡片
              </button>
            </div>
          </div>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="py-12 text-center text-stone-300 bg-white/4 rounded-[1.3rem] border border-dashed border-white/10">
            <p className="text-sm">沒有找到符合「{searchQuery}」的技能項目</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-semibold text-[var(--coffee-soft)] hover:underline cursor-pointer"
            >
              清除所有篩選條件
            </button>
          </div>
        ) : viewMode === 'progress' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => {
              const badge = getLevelLabel(skill.level);

              return (
                <div
                  key={skill.id}
                  className="p-4 rounded-[1.3rem] border border-white/10 bg-white/4 hover:bg-white/6 transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-white text-sm">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-white/6 text-stone-200">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      {skill.description && (
                        <p className="text-xs text-stone-300 mt-0.5">{skill.description}</p>
                      )}
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${badge.color}`}>
                        {badge.text}
                      </span>
                      <span className="text-[11px] font-mono text-stone-400 mt-0.5">
                        {skill.years} 年實戰
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 mt-2">
                    <div className="flex items-center justify-between text-[10px] mono-font uppercase tracking-[0.12em] text-stone-400">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[linear-gradient(90deg,#f0b57a_0%,#d88943_100%)] rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
};
