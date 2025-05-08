"use client";

import { useCallback, useState } from "react";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";
import { FileUp, CheckCircle2, X } from "lucide-react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import { motion } from "framer-motion";
import { CSVData } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

type Props = {
  onDataParsed?: (data: CSVData[]) => void;
};

export default function CSVUploadSection({ onDataParsed }: Props) {
  const [csvData, setCsvData] = useState<CSVData[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      setFileName(file.name);
      setUploadStatus("uploading");

      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const parsedData = results.data as CSVData[];

          if (parsedData.length > 0) {
            setCsvData(parsedData);
            setHeaders(Object.keys(parsedData[0]));
            setUploadStatus("success");

            toast({
              title: "CSV uploaded successfully",
              description: `${parsedData.length} rows parsed from ${file.name}`,
            });

            // ✅ إرسال البيانات إلى الرسم البياني
            if (onDataParsed) {
              onDataParsed(parsedData);
            }

          } else {
            setUploadStatus("error");
            toast({
              title: "Error parsing CSV",
              description: "No data found in the file",
              variant: "destructive",
            });
          }
        },
        error: () => {
          setUploadStatus("error");
          toast({
            title: "Error parsing CSV",
            description: "Failed to parse the file",
            variant: "destructive",
          });
        }
      });
    }
  }, [toast, onDataParsed]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'text/plain': ['.txt']
    },
    maxFiles: 1
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-8"
    >
      <Card>
        <CardHeader>
          <CardTitle>CSV Data Upload</CardTitle>
          <CardDescription>
            Upload a CSV file to visualize and analyze the data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`mb-6 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
              isDragActive
                ? "border-primary bg-primary/5"
                : "border-muted-foreground/20 hover:border-muted-foreground/50"
            }`}
          >
            <input {...getInputProps()} />
            {uploadStatus === "idle" && (
              <>
                <FileUp className="mb-4 h-10 w-10 text-muted-foreground" />
                <h3 className="mb-2 text-lg font-medium">Drag & drop a CSV file</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  or click to select a file from your computer
                </p>
                <Button>Select File</Button>
              </>
            )}
            {uploadStatus === "uploading" && (
              <div className="flex flex-col items-center">
                <div className="mb-4 h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                <p className="text-sm">Uploading {fileName}...</p>
              </div>
            )}
            {uploadStatus === "success" && (
              <div className="flex flex-col items-center">
                <CheckCircle2 className="mb-4 h-10 w-10 text-green-500" />
                <p className="mb-2 text-lg font-medium">Upload Complete</p>
                <p className="mb-4 text-sm text-muted-foreground">
                  Successfully parsed {csvData.length} rows from {fileName}
                </p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCsvData([]);
                    setHeaders([]);
                    setFileName("");
                    setUploadStatus("idle");
                  }}
                >
                  Upload Another File
                </Button>
              </div>
            )}
            {uploadStatus === "error" && (
              <div className="flex flex-col items-center">
                <X className="mb-4 h-10 w-10 text-red-500" />
                <p className="mb-2 text-lg font-medium">Upload Failed</p>
                <p className="mb-4 text-sm text-muted-foreground">
                  There was a problem parsing your CSV file
                </p>
                <Button>Try Again</Button>
              </div>
            )}
          </div>

          {csvData.length > 0 && (
            <div className="overflow-hidden rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    {headers.slice(0, 5).map((header) => (
                      <TableHead key={header}>{header}</TableHead>
                    ))}
                    {headers.length > 5 && <TableHead>...</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {csvData.slice(0, 5).map((row, index) => (
                    <TableRow key={index}>
                      {headers.slice(0, 5).map((header) => (
                        <TableCell key={`${index}-${header}`}>
                          {String(row[header])}
                        </TableCell>
                      ))}
                      {headers.length > 5 && <TableCell>...</TableCell>}
                    </TableRow>
                  ))}
                  {csvData.length > 5 && (
                    <TableRow>
                      <TableCell colSpan={Math.min(headers.length, 6)} className="text-center text-sm text-muted-foreground">
                        Showing 5 of {csvData.length} rows
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
