import React, { useState, useEffect } from 'react';
import { UserProfile } from '../types';
import { Mail, Phone, MapPin, Send, Check, Copy, Clock, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  profile: UserProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '專案架構顧問',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('zh-TW', {
        timeZone: 'Asia/Taipei',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setCurrentTime(timeStr);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setErrorMessage('目前無法自動複製，請直接選取文字複製。');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('請填寫所有必要欄位（姓名、信箱與訊息內容）。');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMessage('請輸入有效的電子郵件地址。');
      return;
    }

    setIsSubmitting(true);

    const subject = `[履歷網站] ${formData.topic}｜${formData.name}`;
    const body = [
      `姓名：${formData.name}`,
      `Email：${formData.email}`,
      `洽談主題：${formData.topic}`,
      '',
      formData.message,
    ].join('\n');

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  return (
    <section id="contact" className="section-shell dark">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-kicker">05 / Get In Touch</div>
            <h2 className="section-heading">聯絡方式與合作洽詢</h2>
          </div>
          <p className="section-subtitle">
            歡迎任何架構顧問、全職技術領導邀請、演講交流或潛在專案合作提案。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-[1.6rem] bg-white/4 border border-white/10 space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] mono-font text-[11px] text-white">
                直接聯繫方式
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">電子郵件 (Email)</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profile.email, 'email')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                  title="複製 Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">聯絡電話 (Phone)</div>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-emerald-600 transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(profile.phone, 'phone')}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
                  title="複製電話"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Timezone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">所在位置 (Location)</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timezone & Availability Card */}
            <div className="p-5 rounded-2xl border border-slate-200 bg-slate-900 text-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                  <Clock className="w-4 h-4" />
                  <span>台北標準時間 (UTC+8)</span>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                  {currentTime || '12:00:00'}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                我通常會在 <strong>24 小時內</strong> 檢閱並回覆所有工作與技術提案。若有急迫需求，亦可直接發送電子郵件至個人信箱。
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                <span>發送合作訊息 (Send a Message)</span>
              </h3>
                <p className="text-xs text-slate-500 mb-6">
                填寫後會開啟你的預設郵件程式，確認內容後即可寄出。
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-emerald-900">郵件草稿已建立</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed max-w-md mx-auto">
                    已嘗試開啟預設郵件程式。請確認收件人、主旨與內容後按下寄出；若沒有開啟，請直接寄信至 {profile.email}。
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="action-btn mt-3 px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                  >
                    發送另一則訊息
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 flex items-center gap-2 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        您的姓名 / 稱謂 <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="例如：王小明 / Alex Wang"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        電子郵件 (Email) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      洽談主題 (Topic)
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-xs"
                    >
                      <option value="專案架構顧問">專案架構與技術顧問諮詢</option>
                      <option value="全職工作邀請">全職領導職位 / Staff Engineer 邀請</option>
                      <option value="技術分享與培訓">技術論壇演講或企業內部培訓</option>
                      <option value="咖啡交流與其他">技術交流或職涯網絡連結</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      訊息內容 (Message) <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="請簡述您的專案需求、職缺細節或預期合作形式..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="action-btn w-full sm:w-auto px-6 py-2.5 font-semibold rounded-lg shadow-xs hover:shadow transition-all inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>傳送中...</span>
                    ) : (
                      <>
                        <span>傳送合作意向</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
