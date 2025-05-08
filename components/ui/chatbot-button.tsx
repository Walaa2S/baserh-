'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { MessageSquare } from 'lucide-react';
import ChatPopup from './chat-popup'; // تأكد أنه Default Export

export default function ChatbotButton() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const isArabic = language === 'ar';

  const togglePopup = () => setOpen(!open);

  return (
    <div>
      {/* زر المحادثة */}
      <div
        className={`fixed bottom-6 ${isArabic ? 'right-6' : 'left-6'} z-50`}
      >
        <button
          onClick={togglePopup}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 focus:outline-none"
          aria-label="Open Chat"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>

      {/* نافذة الدردشة */}
      {open && <ChatPopup onClose={togglePopup} />}
    </div>
  );
}
