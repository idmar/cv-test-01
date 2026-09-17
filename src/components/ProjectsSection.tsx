import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ExternalLink, Github, ArrowUpRight, Star, Layers, CheckCircle2 } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: '全部作品' },
    { id: 'cloud', label: '雲端與微服務' },
    { id: 'fullstack', label: '企業級全端' },
    { id: 'ai', label: 'AI 與智慧應用' },
    { id: 'opensource', label: '開源與設計系統' },
  ];

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="section-shell light">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-kicker">04 / Portfolio & Deliverables</div>
            <h2 className="section-heading">代表專案作品</h2>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/70 rounded-full border border-slate-200 shadow-[0_8px_20px_rgba(23,20,17,0.04)] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-[10px] mono-font uppercase tracking-[0.12em] rounded-full transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#171411] text-[#f4efe9] shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/80 rounded-[1.6rem] border border-slate-200 overflow-hidden shadow-[0_18px_34px_rgba(20,17,13,0.05)] hover:shadow-[0_20px_40px_rgba(20,17,13,0.08)] hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-slate-800 px-2.5 py-0.5 rounded shadow-xs">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-bold bg-amber-500 text-white px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
                        <Star className="w-3 h-3 fill-white" />
                        精選
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs font-mono text-slate-200">{project.period}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[var(--orange)] transition-colors leading-snug display-font text-[clamp(1.1rem,0.9rem+0.7vw,1.8rem)] tracking-[-0.06em]">
                    {project.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-600 line-clamp-1">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {project.metrics && project.metrics.length > 0 && (
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700 flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1 font-medium text-[11px]">
                        {project.metrics[0]}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-dashed border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1 text-[10px] mono-font uppercase tracking-[0.12em] text-[#171411] hover:text-[var(--orange)] cursor-pointer"
                >
                  <span>查看架構詳情</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
                      title="原始碼"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-slate-500 hover:text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
                      title="即時展示"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
};
