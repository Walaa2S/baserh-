'use client';

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  PieChart,
  Database,
  LineChart,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();

  const topRowIcons = [BarChart3, PieChart, Database, LineChart, Cloud];

  const texts = {
    en: {
      heading: "Transform Your",
      into: "Into",
      rotatingWords: ["Insights", "Trends", "Strategies", "Visuals"],
      description:
        "Upload, analyze, and visualize your data with our powerful and intuitive platform.",
      getStarted: "Get Started",
      exploreMarket: "Analyze Data",
    },
    ar: {
      heading: "حوّل بياناتك إلى",
      into: "",
      rotatingWords: ["رؤى", "اتجاهات", "استراتيجيات", "رسوم بيانية"],
      description: "قم برفع بياناتك وتحليلها وعرضها عبر منصتنا الذكية.",
      getStarted: "ابدأ الآن",
      exploreMarket: "حلل البيانات",
    },
  };

  const t = texts[language];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-foreground overflow-hidden">
      {/* ✅ أيقونات متحركة */}
      <div className="absolute top-28 left-0 right-0 px-4 z-0 pointer-events-none hidden md:block">
        <div className="flex justify-between">
          {topRowIcons.map((Icon, idx) => (
            <motion.div
              key={`top-${idx}`}
              className="text-blue-500/30 dark:text-white/10"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5 + (idx % 3),
                delay: idx * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ المحتوى الرئيسي داخل بطاقة شفافة */}
      <div
        className={`relative z-10 text-center max-w-2xl mt-28 backdrop-blur-md bg-white/5 dark:bg-black/10 p-6 rounded-xl shadow-xl border border-white/10 ${
          language === 'ar' ? 'rtl' : ''
        }`}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.heading}{" "}
          <span className="text-primary drop-shadow-glow animate-pulse">
            <Typewriter
              words={t.rotatingWords}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>{" "}
          {t.into}
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t.description}
        </motion.p>

        <motion.div
          className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'sm:flex-row-reverse' : ''}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            asChild
            size="lg"
            className="gap-2 shadow-lg hover:shadow-primary/40 transition duration-300"
          >
            <Link href="/dashboard">
              {t.getStarted} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:border-primary hover:text-primary transition duration-300"
            asChild
          >
            <Link href="/ai-playground">{t.exploreMarket}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
