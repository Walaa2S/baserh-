'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Papa from 'papaparse';

interface CSVUploadSectionProps {
  onDataParsed: (data: any[]) => void;
  externalInputRef?: React.RefObject<HTMLInputElement>;
}

export default function CSVUploadSection({ onDataParsed, externalInputRef }: CSVUploadSectionProps) {
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        onDataParsed(results.data);
      },
    });
  };

  return (
    <div className="mb-6 text-center">
      {/* ✅ لا حاجة لعرض اسم الملف هنا الآن */}
      <Input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        ref={externalInputRef}
        className="hidden" // ✅ إخفاء العنصر بالكامل
      />
    </div>
  );
}
