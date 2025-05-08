'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChevronRight,
  BarChart3,
  LineChart,
  Upload,
  PieChart,
  Sparkles
} from "lucide-react";
import HeroSection from "@/components/hero-section";
import FeatureCard from "@/components/feature-card";
import ServerActionDemo from "./components/server-action-demo";
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

      {/* مميزات قوية */}
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
            title=""
            description=""
            titleKey="features_csv"
            descKey="features_csv_desc"
            link="/dashboard"
          />
          <FeatureCard
            icon={<BarChart3 />}
            title=""
            description=""
            titleKey="features_ai_playground"
            descKey="features_ai_playground_desc"
            link="/ai-playground"
          />
          <FeatureCard
            icon={<LineChart />}
            title=""
            description=""
            titleKey="features_custom_dash"
            descKey="features_custom_dash_desc"
            link="/dashboard"
          />
          <FeatureCard
            icon={<PieChart />}
            title=""
            description=""
            titleKey="features_viz"
            descKey="features_viz_desc"
            link="/dashboard"
          />
          <FeatureCard
            icon={<ChevronRight />}
            title=""
            description=""
            titleKey="features_updates"
            descKey="features_updates_desc"
            link="/dashboard"
          />
          <FeatureCard
            icon={<Sparkles />}
            title=""
            description=""
            titleKey="features_summary"
            descKey="features_summary_desc"
            link="/dashboard"
          />
        </motion.div>
      </section>

      {/* عرض مباشر للذكاء الاصطناعي */}
      {/* <motion.section
        className="container px-4 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ServerActionDemo />
      </motion.section> */}

      {/* دعوة لبدء الاستخدام */}
      {/* <motion.section
        className="bg-muted py-16 md:py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-3xl font-bold md:text-4xl"
            >
              {language === 'ar' ? 'ابدأ الآن' : 'Get Started Today'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 text-muted-foreground"
            >
              {language === 'ar'
                ? 'ارتقِ بتحليل بياناتك إلى المستوى التالي باستخدام أدواتنا الذكية.'
                : 'Take your data analysis to the next level with our powerful tools.'}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button asChild size="lg">
                <Link href="/dashboard">{language === 'ar' ? 'تجربة لوحة البيانات' : 'Explore Dashboard'}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/ai-playground">{language === 'ar' ? 'جرب الذكاء الاصطناعي' : 'Explore AI Playground'}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

    
    </motion.div>
  );
}
