'use client';

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import PageTransition from '@/components/page-transition';
import { LanguageProvider } from '@/lib/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#0f172a] dark:to-[#1e293b]">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
        <Toaster />
      </ThemeProvider>
    </LanguageProvider>
  );
}
