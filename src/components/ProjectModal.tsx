import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
      >
        {/* Header with image */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-900 overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="關閉對話框"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image banner */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider bg-indigo-600 text-white px-2.5 py-0.5 rounded">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-slate-300 font-mono">{project.period}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              專案背景與目標 (Overview)
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>量化成果與架構指標 (Impact & Metrics)</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {project.metrics.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                    <span className="font-medium">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-rose-200/80 bg-rose-50/40">
              <div className="flex items-center gap-2 mb-2 text-rose-800 font-bold text-xs">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>遭遇技術挑戰 (The Challenge)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl border border-indigo-200/80 bg-indigo-50/40">
              <div className="flex items-center gap-2 mb-2 text-indigo-800 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>架構解法與創新 (The Solution)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-mono">
              技術棧 (Tech Stack)
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono font-medium text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs rounded-lg transition-colors shadow-xs"
              >
                <span>即時展示 Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-medium text-xs rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>原始碼 (Repo)</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};
