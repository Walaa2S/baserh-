'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { X } from 'lucide-react';
import Image from 'next/image';
import basiraIcon from '@public\basira-avatar.png'; // تأكد أن الصورة موجودة بهذا المسار

type QuestionKey =
  | 'ما هي منصة بصيرة؟'
  | 'كيف أرفع ملف CSV؟'
  | 'ما الفرق بين بصيرة والمواقع الأخرى؟'
  | 'لماذا اسمها بصيرة؟'
  | 'What is Basira Platform?'
  | 'How to upload CSV?'
  | 'Difference vs other platforms?'
  | 'Why the name Basira?';

const ChatPopup = ({ onClose }: { onClose: () => void }) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const t = {
    title: isArabic ? ' المساعدة  الذكية  بصيرة 👧' : 'Basira Bot – Smart Assistant',
    placeholder: isArabic ? 'اكتب رسالتك هنا...' : 'Type your message...',
    quickReplies: isArabic
      ? ['ما هي منصة بصيرة؟', 'كيف أرفع ملف CSV؟', 'ما الفرق بين بصيرة والمواقع الأخرى؟', 'لماذا اسمها بصيرة؟']
      : ['What is Basira Platform?', 'How to upload CSV?', 'Difference vs other platforms?', 'Why the name Basira?'],
    answers: {
      'ما هي منصة بصيرة؟': 'منصة بصيرة هي منصة تحليل بيانات تفاعلية تساعدك على رفع وتحليل البيانات بسهولة باستخدام أدوات الذكاء الاصطناعي.',
      'كيف أرفع ملف CSV؟': 'يمكنك رفع الملف من خلال قسم "CSV Data Upload" في لوحة التحكم.',
      'ما الفرق بين بصيرة والمواقع الأخرى؟': 'بصيرة تدعم اللغة العربية، وتوفر تحليلات ذكية وتصورات مرئية مخصصة.',
      'لماذا اسمها بصيرة؟': 'اخترنا اسم "بصيرة" لأنه يرمز إلى الرؤية العميقة والفهم الذكي للبيانات.',
      'What is Basira Platform?': 'Basira is an interactive data analysis platform that helps you upload and analyze data using AI tools.',
      'How to upload CSV?': 'You can upload your file from the "CSV Data Upload" section.',
      'Difference vs other platforms?': 'Basira supports Arabic, offers smart analytics and beautiful charts.',
      'Why the name Basira?': 'We chose the name "Basira" because it means insight and deep understanding in Arabic.',
    } as Record<string, string>,
  };

  const [messages, setMessages] = useState<string[]>([
    isArabic ? 'مرحبًا بك في المساعدة  الذكية  بصيرة  , كيف يمكنني مساعدتك اليوم👋 ؟' : 'Hi! I’m Basira Assistant 👋 How can I help you today?',
  ]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(true);

  const handleQuickReply = (question: QuestionKey) => {
    setMessages((prev) => [...prev, question, t.answers[question] || '...جارٍ المعالجة']);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, input]);
      setInput('');
    }
  };

  return (
    <div
      className={`fixed bottom-24 ${isArabic ? 'right-4' : 'left-4'} z-50 w-80 bg-background border rounded-xl shadow-lg`}
    >
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <span className="font-bold text-sm">{t.title}</span>
        <X className="cursor-pointer w-4 h-4" onClick={onClose} />
      </div>

      <div className="flex flex-col gap-2 max-h-96 overflow-y-auto p-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-lg text-sm max-w-[90%] ${
              i % 2 === 0
                ? isArabic
                  ? 'self-end bg-primary text-white'
                  : 'self-start bg-muted'
                : isArabic
                ? 'self-start bg-muted'
                : 'self-end bg-primary text-white'
            }`}
          >
            {msg}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 px-3 pb-2">
        {t.quickReplies.map((q, i) => (
          <button
            key={i}
            onClick={() => handleQuickReply(q as QuestionKey)}
            className="bg-muted hover:bg-accent px-3 py-1 rounded-full text-xs"
          >
            {q}
          </button>
        ))}
      </div>

      <div className="flex items-center border-t px-3 py-2 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.placeholder}
          className="flex-1 text-sm bg-transparent focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="text-sm bg-primary text-white px-3 py-1 rounded hover:bg-primary/90"
        >
          ✉️ {isArabic ? 'إرسال' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatPopup;
