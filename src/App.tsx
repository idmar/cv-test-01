/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UserProfile } from './types';
import { PROFILES } from './data/initialData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeEditorModal } from './components/ResumeEditorModal';
import { PrintResumeView } from './components/PrintResumeView';

const STORAGE_KEY = 'dynamic_resume_custom_profile_v1';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return PROFILES[0];
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isPrintOpen, setIsPrintOpen] = useState(false);

  // Sync title with profile
  useEffect(() => {
    document.title = `${profile.name} (${profile.nameEn}) | ${profile.title}`;
  }, [profile]);

  const handleSelectProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
    } catch {
      // ignore
    }
  };

  const handleSaveProfile = (updated: UserProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetProfile = () => {
    setProfile(PROFILES[0]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <div className="site-shell">
      {/* Sticky Top Navigation with Reading Progress */}
      <Navbar
        currentProfile={profile}
        onSelectProfile={handleSelectProfile}
        onOpenEditor={() => setIsEditorOpen(true)}
        onOpenPrint={() => setIsPrintOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="site-main">
        {/* 1. Hero & Quick Stats */}
        <HeroSection
          profile={profile}
          onOpenPrint={() => setIsPrintOpen(true)}
        />

        {/* 2. About & Philosophy */}
        <AboutSection profile={profile} />

        {/* 3. Experience & Education Timeline */}
        <ExperienceSection experiences={profile.experiences} />

        {/* 4. Skills & Competencies Visualization */}
        <SkillsSection skills={profile.skills} />

        {/* 5. Projects & Deliverables Showcase */}
        <ProjectsSection projects={profile.projects} />

        {/* 6. Contact & Collaboration Form */}
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Custom Profile Editor Modal */}
      <ResumeEditorModal
        profile={profile}
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />

      {/* Printable Resume View Modal */}
      {isPrintOpen && (
        <PrintResumeView
          profile={profile}
          onClose={() => setIsPrintOpen(false)}
        />
      )}
    </div>
  );
}
