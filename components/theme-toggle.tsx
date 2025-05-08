"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [language, setLanguage] = useState<"en" | "ar">("en");

  // Set English as default language on mount
  useEffect(() => {
    setLanguage("en");
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <div className="flex items-center gap-2">
      {/* Theme Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="px-3 py-1 rounded-xl backdrop-blur-sm shadow-md text-sm transition-all border border-white/10 bg-white/10 hover:bg-white/20 text-white"
      >
        {language === "en" ? "العربية" : "English"}
      </button>
    </div>
  );
}
