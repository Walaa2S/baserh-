'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, BarChart3, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const routes = [
    {
      name: language === "en" ? "Home" : "الرئيسية",
      path: "/dashboard",
      icon: Home,
    },
    {
      name: language === "en" ? "AI Playground" : " الذكاء الاصطناعي",
      path: "/ai-playground",
      icon: BarChart3,
    },
    {
      name: language === "en" ? "Dashboard" : "لوحة التحكم",
      path: "/dashboard",
      icon: LineChart,
    },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-background text-foreground shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
        
        {/* الشعار مع الصورة والنص */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
            <img
              src="/basira-avatar1.png"
              alt="Basira Logo"
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-foreground">
              {language === "en" ? "Basira " : " بصيرة"}
            </span>
          </Link>
        </div>

        {/* روابط التنقل */}
        <nav className="hidden md:flex gap-6 text-sm font-medium justify-center">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                pathname === route.path
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-muted"
              )}
            >
              <route.icon className="h-4 w-4" />
              {route.name}
            </Link>
          ))}
        </nav>

        {/* أدوات اللغة والوضع */}
        <div className="flex items-center gap-2">
          {/* زر الوضع */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-foreground" />
            ) : (
              <Moon className="w-5 h-5 text-foreground" />
            )}
          </Button>

          {/* زر اللغة */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl bg-background/50 backdrop-blur border border-white/10 shadow-sm text-sm"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          >
            {language === "en" ? "العربية" : "English"}
          </Button>
        </div>
      </div>
    </header>
  );
}
