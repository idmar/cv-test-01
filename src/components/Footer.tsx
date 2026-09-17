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
    <footer className="bg-[#0f0d0b] text-stone-300 py-12 border-t border-white/10 text-xs relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--coffee)]/70" />
      <div className="max-w-[1848px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="text-white display-font text-lg tracking-[-0.08em] uppercase">{profile.name} ({profile.nameEn})</div>
            <div className="text-stone-300 mono-font uppercase tracking-[0.12em] mt-1 text-[10px]">{profile.title}</div>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-200 transition-colors cursor-pointer text-[10px] mono-font uppercase tracking-[0.12em]"
            >
              <span>回頂端</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p className="mono-font uppercase tracking-[0.12em]">© {new Date().getFullYear()} {profile.nameEn}. All rights reserved.</p>
          <p className="flex items-center gap-2 mono-font uppercase tracking-[0.08em]">
            <span>React 19</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </p>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="display-font text-[clamp(3.3rem,6vw,12.5rem)] leading-[0.8] tracking-[-0.08em] text-stone-100/85 uppercase">
            2024 — 2025
          </div>
        </div>
      </div>
    </footer>
  );
};
