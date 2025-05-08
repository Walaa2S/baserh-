import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import PageTransition from '@/components/page-transition';
import { LanguageProvider } from '@/lib/LanguageContext';
import ChatbotButton from '@/components/ui/chatbot-button';
import Footer from '@/components/ui/footer'; 


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'منصة بصيرة للبيانات',
  description: 'قم برفع بياناتك وتحليلها وعرضها باستخدام الذكاء الاصطناعي',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ChatbotButton />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 bg-background text-foreground dark:bg-gradient-to-br dark:from-[#0f172a] dark:to-[#1e293b] px-4">
                <div className="max-w-6xl mx-auto">
                  <PageTransition>{children}</PageTransition>

                  {/* ✅ Footer ثابت أسفل كل صفحة */}
                  <Footer />
                </div>
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
