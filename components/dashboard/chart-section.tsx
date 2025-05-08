'use client';

import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip
} from "recharts";

import { ChartData } from "@/lib/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

interface ChartSectionProps {
  type: "line" | "bar" | "pie";
  data: ChartData[];
}

export default function ChartSection({ type, data }: ChartSectionProps) {
  const COLORS = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))"
  ];

  const [showTopOnly, setShowTopOnly] = useState(true);
  const { language } = useLanguage();

  // تصفية البيانات لتجاهل القيم الغريبة
  const filteredData = showTopOnly
    ? [...data]
        .filter(item => item.name && !isNaN(item.value))
        .sort((a, b) => b.value - a.value)
        .slice(0, 10)
    : data.filter(item => item.name && !isNaN(item.value));

  const isValid = filteredData.some(item =>
    item.name !== "Unknown" && item.value > 0
  );

  const buttonText = showTopOnly
    ? language === "ar" ? "عرض الكل" : "Show All"
    : language === "ar" ? "عرض الأعلى فقط" : "Show Top Only";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ✅ زر الفلترة بنمط Nicolai شفاف وجذاب */}
      <div className="mb-4 text-center">
        <Button
          variant="outline"
          className="px-6 py-2 rounded-xl backdrop-blur bg-white/5 dark:bg-black/10 border border-white/20 text-sm hover:border-primary hover:text-primary transition"
          onClick={() => setShowTopOnly(!showTopOnly)}
        >
          {buttonText}
        </Button>
      </div>

      <div className="h-[250px] w-full px-2 pb-2">
        {isValid ? (
          <ResponsiveContainer width="100%" height="100%">
            {type === "line" ? (
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" fontSize={12} tickMargin={10} />
                <YAxis fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                  activeDot={{ r: 6, fill: "hsl(var(--chart-1))" }}
                />
              </LineChart>
            ) : type === "bar" ? (
              <BarChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" fontSize={12} tickMargin={10} />
                <YAxis fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="hsl(var(--chart-2))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            ) : (
              <PieChart>
                <Pie
                  data={filteredData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {filteredData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--foreground))"
                  }}
                />
              </PieChart>
            )}
          </ResponsiveContainer>
        ) : (
          <div className="text-center text-muted-foreground text-sm mt-8">
            {language === "ar"
              ? "لا توجد بيانات صالحة للعرض في هذا الرسم."
              : "No valid data to display in this chart."}
          </div>
        )}
      </div>
    </motion.div>
  );
}
