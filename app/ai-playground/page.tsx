'use client';

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";
import { MarketData } from "@/lib/types";

import AIPlaygroundHeader from "./ai-playground-header";
import AIPlaygroundTable from "./ai-playground-table";
import SmartInsights from "./smart-insights";

export default function AIPlaygroundPage() {
  const { language } = useLanguage();
  const [uploadedData, setUploadedData] = useState<MarketData[]>([]);
  const [aiAnalysis, setAiAnalysis] = useState<string>("");

  return (
<main className="relative min-h-screen flex flex-col items-center justify-start pt-28 px-4 text-foreground">


      
      {/* خلفية رمزية متحركة شفافة */}  
      <div className="absolute top-10 left-0 right-0 z-0 flex justify-around opacity-10 pointer-events-none">
        <div className="w-16 h-16 bg-blue-400 rounded-full blur-xl animate-pulse" />
        <div className="w-20 h-20 bg-purple-400 rounded-full blur-2xl animate-ping" />
        <div className="w-16 h-16 bg-pink-500 rounded-full blur-md animate-bounce" />
      </div>

      {/* العنوان والوصف داخل بطاقة زجاجية فقط */}  
      <section className={`relative z-10 text-center max-w-3xl w-full space-y-6 p-6 backdrop-blur-md bg-white/5 dark:bg-black/10 rounded-xl border border-white/10 shadow-xl ${language === 'ar' ? 'rtl' : ''}`}>
        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-glow tracking-tight">
          {t(language, "ai_playground_title")}
        </h1>
        <p className="text-muted-foreground text-lg">
          {t(language, "ai_playground_description")}
        </p>
      </section>

      {/* أدوات الذكاء الاصطناعي وزر رفع الملف */}  
      <section className="relative z-10 mt-10 w-full max-w-4xl space-y-8">
        <SmartInsights onAnalyze={setAiAnalysis} />
        {uploadedData.length > 0 && (
          <div className="rounded-xl border border-border bg-card shadow-md p-6">
            <AIPlaygroundTable data={uploadedData} />
          </div>
          
        )}
      </section>
    </main>
  );
}
