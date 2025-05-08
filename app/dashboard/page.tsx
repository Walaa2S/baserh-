'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BarChart3, LineChart, Upload, PieChart, Sparkles, ChevronRight, BrainCircuit
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import FeatureCard from "@/components/feature-card";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />

      {/* 🧠 المميزات */}
      <section className="container px-4 py-16 md:py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            {t(language, "features_title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-muted-foreground"
          >
            {t(language, "features_desc")}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <FeatureCard
            icon={<Upload />}
            titleKey="features_csv"
            descKey="features_csv_desc"
            link="/dashboard"
          />
          <FeatureCard
            icon={<BarChart3 />}
            titleKey="features_ai_playground"
            descKey="features_ai_playground_desc"
            link="/ai-playground"
          />
          <FeatureCard
            icon={<LineChart />}
            titleKey="features_custom_dash"
            descKey="features_custom_dash_desc"
            link="/dashboard"
          />
          <FeatureCard
            icon={<PieChart />}
            titleKey="features_viz"
            descKey="features_viz_desc"
            link="/dashboard"
          />
          <FeatureCard
            icon={<BrainCircuit />}
            titleKey="features_auto_analysis"
            descKey="features_auto_analysis_desc"
            link="/dashboard"
          />
          <FeatureCard
            icon={<Sparkles />}
            titleKey="features_summary"
            descKey="features_summary_desc"
            link="/dashboard"
          />
        </motion.div>
      </section>
    </motion.div>
  );
}
