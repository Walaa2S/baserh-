"use client";

import { CSVData } from "@/lib/types";

interface Props {
  data: CSVData[];
  language: "ar" | "en";
}

export default function AIAnalysisSection({ data, language }: Props) {
  const hasData = data && data.length > 0;
  const keys = hasData ? Object.keys(data[0]) : [];

  const columnAnalysis = keys.map((key) => {
    const values = data.map((row) => row[key]).filter((v) => v !== undefined && v !== null);
    const sample = values[0];

    if (typeof sample === "number" || (!isNaN(Number(sample)) && sample !== "")) {
      const numericValues = values.map((v) => Number(v)).filter((n) => !isNaN(n));
      const avg = numericValues.reduce((a, b) => a + b, 0) / numericValues.length;
      const max = numericValues.reduce((a, b) => Math.max(a, b), -Infinity);
      const min = numericValues.reduce((a, b) => Math.min(a, b), Infinity);
      

      return { key, type: "number", avg, max, min };
    }

    const booleanValues = values.map((v) => String(v).toLowerCase());
    const isBoolean = booleanValues.every((v) => v === "true" || v === "false");

    if (isBoolean) {
      const trueCount = booleanValues.filter((v) => v === "true").length;
      const falseCount = booleanValues.filter((v) => v === "false").length;

      return { key, type: "boolean", trueCount, falseCount };
    }

    const stringValues = values.map((v) => String(v));
    const unique = Array.from(new Set(stringValues));

    return {
      key,
      type: "string",
      uniqueCount: unique.length,
      examples: unique.slice(0, 3)
    };
  });

  return (
    <div className="text-sm text-muted-foreground px-4 py-4 bg-background/50 backdrop-blur rounded-lg border border-border shadow-inner space-y-4">
      {hasData ? (
        <>
          <p className="font-medium">
            {language === "ar"
              ? "✅ تم تحليل البيانات باستخدام الذكاء الاصطناعي:"
              : "✅ Data analyzed using AI:"}
          </p>

          <ul className="space-y-2 list-disc px-4">
            {columnAnalysis.map((col) => (
              <li key={col.key}>
                {language === "ar" ? (
                  <>
                    <strong>{col.key}</strong>:{" "}
                    {col.type === "number" && col.avg !== undefined && (
                      <>
                        رقمية - المتوسط: {col.avg.toFixed(2)}, الأعلى: {col.max}, الأدنى: {col.min}
                      </>
                    )}
                    {col.type === "boolean" && (
                      <>
                        منطقية - عدد true: {col.trueCount}, عدد false: {col.falseCount}
                      </>
                    )}
                    {col.type === "string" && (
                      <>
                        نصية - {col.uniqueCount} قيمة مميزة. أمثلة: {(col.examples || []).join(", ")}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <strong>{col.key}</strong>:{" "}
                    {col.type === "number" && col.avg !== undefined && (
                      <>
                        Number - Avg: {col.avg.toFixed(2)}, Max: {col.max}, Min: {col.min}
                      </>
                    )}
                    {col.type === "boolean" && (
                      <>
                        Boolean - True: {col.trueCount}, False: {col.falseCount}
                      </>
                    )}
                    {col.type === "string" && (
                      <>
                        String - {col.uniqueCount} unique values. Examples: {(col.examples || []).join(", ")}
                      </>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>
          {language === "ar"
            ? "⚠️ لم يتم رفع بيانات حتى الآن."
            : "⚠️ No data uploaded yet."}
        </p>
      )}
    </div>
  );
}
