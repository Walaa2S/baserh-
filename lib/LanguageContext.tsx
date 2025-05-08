'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// ✅ نوع اللغة المدعومة
export type Language = 'en' | 'ar';

// ✅ تم إضافة export هنا
export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
}>({
  language: 'ar', // اللغة الافتراضية
  setLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ هوك مخصص للاستخدام النظيف في باقي الملفات
export const useLanguage = () => useContext(LanguageContext);