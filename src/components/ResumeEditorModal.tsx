import React, { useEffect, useRef, useState } from 'react';
import { UserProfile } from '../types';
import { X, Save, RotateCcw, Check, Sparkles } from 'lucide-react';
import { PROFILES } from '../data/initialData';

interface ResumeEditorModalProps {
  profile: UserProfile;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProfile: UserProfile) => void;
  onReset: () => void;
}

export const ResumeEditorModal: React.FC<ResumeEditorModalProps> = ({
  profile,
  isOpen,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<UserProfile>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setFormData({ ...profile });
      setSavedSuccess(false);
      requestAnimationFrame(() => dialogRef.current?.focus());
    }
  }, [isOpen, profile]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  const handleApplyPreset = (presetId: string) => {
    const found = PROFILES.find((p) => p.id === presetId);
    if (found) {
      setFormData({ ...found });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-editor-title"
        tabIndex={-1}
        ref={dialogRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-150 focus:outline-none"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <div>
            <h3 id="resume-editor-title" className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span>自訂即時編輯履歷資訊</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              直接修改文字，儲存後立即更新整個網頁履歷所有欄位與列印版本。
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Presets Bar */}
        <div className="px-6 py-2.5 bg-indigo-50/60 border-b border-indigo-100 flex items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium shrink-0">快速套用範例：</span>
          <div className="flex gap-2 overflow-x-auto">
            {PROFILES.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => handleApplyPreset(p.id)}
                className="px-2.5 py-1 rounded bg-white hover:bg-indigo-100/50 text-indigo-700 border border-indigo-200 text-xs font-medium transition-colors cursor-pointer shrink-0"
              >
                {p.name} ({p.title.split('&')[0]})
              </button>
            ))}
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">中文姓名</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">英文姓名</label>
              <input
                type="text"
                value={formData.nameEn}
                onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">職稱 (中文)</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">專業職稱 (英文)</label>
              <input
                type="text"
                value={formData.titleEn}
                onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">一句話定位標語 (Tagline)</label>
            <textarea
              rows={2}
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">所在地區</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">累計年資</label>
              <input
                type="number"
                value={formData.yearsOfExp}
                onChange={(e) => setFormData({ ...formData, yearsOfExp: Number(e.target.value) })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">求職狀態文字</label>
              <input
                type="text"
                value={formData.statusText}
                onChange={(e) => setFormData({ ...formData, statusText: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">電子信箱 (Email)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">聯絡電話 (Phone)</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-xs"
              />
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-500 hover:text-slate-800 text-xs font-medium cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>恢復原始預設值</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 cursor-pointer"
              >
                取消
              </button>
              <button
                type="submit"
                className="action-btn inline-flex items-center gap-1.5 px-5 py-2 font-semibold rounded-lg shadow-xs transition-colors cursor-pointer text-xs"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>已儲存更新！</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>儲存並套用</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
