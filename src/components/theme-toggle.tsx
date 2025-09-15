"use client";

import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const setThemeViaButton = () => {
    console.log("OOO " + theme);
    if (theme === "light") {
      setTheme("dark");
    }

    if (theme === "dark") {
      setTheme("light");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      size={"lg"}
      onClick={setThemeViaButton}
      className={cn(["fixed bottom-5 right-5"])}
    >
      {theme === "light" && <Moon />}
      {theme === "dark" && <Sun />}
    </Button>
  );
}

export default ThemeToggle;
