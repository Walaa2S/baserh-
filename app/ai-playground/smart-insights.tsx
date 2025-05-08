'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Loader2, Info, Upload, FileDown } from 'lucide-react';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';

interface SmartInsightsProps {
  onAnalyze: (result: string) => void;
}

export default function SmartInsights({ onAnalyze }: SmartInsightsProps) {
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');
  const [rawCSV, setRawCSV] = useState<string>('');
  const [chartData, setChartData] = useState<Record<string, string>[]>([]);
  const resultRef = useRef<HTMLDivElement>(null);

  const COLORS = ['#4f46e5', '#22c55e', '#f59e0b', '#ec4899', '#10b981', '#6366f1'];

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const text = await file.text();
      setRawCSV(text);

      // ✅ حدد نوع البيانات أثناء التحليل لتفادي أخطاء unknown
      const parsed = Papa.parse<Record<string, string>>(text, { header: true });

      const cleanedData = parsed.data.filter((row) =>
        Object.values(row).some((val) => val !== undefined && val !== "")
      );

      setChartData(cleanedData);

      const csv = Papa.unparse(cleanedData);
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ csv })
      });

      const result = await response.json();
      const insight = result.result || 'لا توجد نتائج تحليل متاحة.';
      setAnalysisResult(insight);
      onAnalyze(insight);
    } catch (error) {
      setAnalysisResult('⚠️ فشل في تنفيذ التحليل.');
      onAnalyze('⚠️ فشل في تنفيذ التحليل.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!resultRef.current) return;
    const canvas = await html2canvas(resultRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, width, height);
    pdf.save('smart-insight.pdf');
  };

  const drawPieData = () => {
    const grouped = chartData.reduce((acc: Record<string, number>, row) => {
      const label = row[Object.keys(row)[0]] || 'غير معروف';
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(grouped).map(([name, value]) => ({ name, value }));
  };

  return (
    <div className="text-center mt-8 space-y-8">
      <div className="flex justify-center gap-2 flex-wrap">
        <label className="inline-flex items-center gap-2 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded shadow">
          <Upload className="w-4 h-4" />
          {loading ? 'جاري التحليل...' : 'تحميل ملف CSV وتشغيل التحليل'}
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileUpload}
            disabled={loading}
          />
        </label>

        {analysisResult && (
          <Button
            onClick={handleDownloadPDF}
            className="gap-2 bg-purple-600 hover:bg-purple-700 text-white"
          >
            <FileDown className="h-4 w-4" /> تحميل النتيجة PDF
          </Button>
        )}
      </div>

      <div className="text-xs text-muted-foreground flex items-center justify-center gap-1">
        <Info className="h-4 w-4" />
        يتم التحليل باستخدام الذكاء الاصطناعي المحلي (LLaMA 3 عبر Ollama)
      </div>

      {analysisResult && (
        <motion.div
          ref={resultRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {analysisResult.split('\n\n').map((block, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-background/70 p-4 rounded-lg shadow backdrop-blur-sm border border-border"
              >
                <p className="whitespace-pre-line text-sm leading-relaxed text-left">{block}</p>
              </motion.div>
            ))}
          </div>

          {/* الرسم البياني التوضيحي */} 
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background/70 p-4 rounded-lg shadow-md">
              <h4 className="text-center font-bold mb-2">توزيع القيم 📊</h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={drawPieData()}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    label
                    onClick={(data, index) => {
                      alert(`تفاصيل إضافية: ${data.name} = ${data.value}`);
                    }}
                  >
                    {drawPieData().map((_, i) => (
                      <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
