"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { saveAs } from "file-saver";
import { CSVData } from "@/lib/types";

interface DashboardHeaderProps {
  csv: CSVData[];
}

export default function DashboardHeader({ csv }: DashboardHeaderProps) {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Dashboard",
      description: "Monitor your data and gain insights through visualizations.",
      refresh: "Refresh",
      export: "Export",
      all: "All Data",
      financial: "Financial",
      marketing: "Marketing",
      operations: "Operations",
    },
    ar: {
      title: "لوحة التحكم",
      description: "راقب بياناتك واحصل على رؤى عبر الرسوم البيانية.",
      refresh: "تحديث",
      export: "تصدير",
      all: "كل البيانات",
      financial: "المالية",
      marketing: "التسويق",
      operations: "العمليات",
    },
  };

  const t = texts[language];

  const handleExport = () => {
    if (!csv || csv.length === 0) return;

    const headers = Object.keys(csv[0]);
    const rows = csv.map((row) => headers.map((key) => row[key] ?? "").join(","));

    const csvContent = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "exported-data.csv");
  };

  return (
    <div className="mb-8 px-4 pt-6 sm:pt-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className={language === "ar" ? "text-right" : ""}>
            <h1 className="mb-1 text-3xl font-bold tracking-tight">{t.title}</h1>
            <p className="text-muted-foreground">{t.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <RefreshCw className="h-4 w-4" />
              {t.refresh}
            </Button>
            <Button onClick={handleExport} variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              {t.export}
            </Button>
          </div>
        </div>
      </motion.div>

      <Tabs defaultValue="all" className="mt-6">
        <TabsList className="flex flex-wrap justify-center sm:justify-start">
          <TabsTrigger value="all">{t.all}</TabsTrigger>
          <TabsTrigger value="financial">{t.financial}</TabsTrigger>
          <TabsTrigger value="marketing">{t.marketing}</TabsTrigger>
          <TabsTrigger value="operations">{t.operations}</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
