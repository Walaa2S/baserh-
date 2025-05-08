"use client";

import { useState } from "react";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface AIPlaygroundTableProps {
  data: any[];
}

export default function AIPlaygroundTable({ data }: AIPlaygroundTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="rounded-xl border overflow-auto shadow-sm bg-background/70 backdrop-blur-md">
        <Table className="min-w-full text-sm">
          <TableHeader className="bg-muted">
            <TableRow>
              {headers.map((header) => (
                <TableHead key={header} className="capitalize text-left text-muted-foreground px-4 py-2">
                  {header.replace(/_/g, " ")}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((row, idx) => (
              <TableRow key={idx} className="hover:bg-accent/20 transition-colors">
                {headers.map((header) => (
                  <TableCell key={header} className="px-4 py-2 whitespace-nowrap">
                    {row[header] ?? "-"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-xs text-muted-foreground">
          عرض {startIndex + 1}-{Math.min(startIndex + itemsPerPage, data.length)} من {data.length}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-xs font-medium">
            الصفحة {currentPage} من {totalPages}
          </span>
          <Button variant="outline" size="icon" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
