import React from 'react';
import { UserProfile } from '../types';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  profile: UserProfile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="text-white font-bold text-base">{profile.name} ({profile.nameEn})</div>
            <div className="text-slate-400 text-xs mt-0.5">{profile.title}</div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer text-xs ml-2"
            >
              <span>回頂端</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {profile.nameEn}. 著作者版權所有。保留一切權利。</p>
          <p className="flex items-center gap-2">
            <span>Powered by React 19 & Tailwind CSS</span>
            <span>•</span>
            <span>RWD 跨裝置響應式設計</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
