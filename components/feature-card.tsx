"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { t, translations } from "@/lib/i18n";

// ✅ نوع مفاتيح الترجمة المسموح بها
type TranslationKey = keyof typeof translations["en"];

interface FeatureCardProps {
  icon: React.ReactNode;
  link?: string;
  title?: string;
  description?: string;
  titleKey?: TranslationKey;
  descKey?: TranslationKey;
}

export default function FeatureCard({
  icon,
  link,
  title,
  description,
  titleKey,
  descKey
}: FeatureCardProps) {
  const { language } = useLanguage();

  const translatedTitle = titleKey ? t(language, titleKey) : title ?? "";
  const translatedDesc = descKey ? t(language, descKey) : description ?? "";

  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group"
    >
      <Card className="h-full transition-shadow duration-300 hover:shadow-md">
        <CardHeader>
          <div className="mb-2 rounded-md bg-primary/10 p-2 w-fit">
            {icon}
          </div>
          <CardTitle className="text-xl">{translatedTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{translatedDesc}</CardDescription>
        </CardContent>
        {link && (
          <CardFooter>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <Link href={link}>
                {language === "ar" ? "المزيد" : "Learn more"}{" "}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
