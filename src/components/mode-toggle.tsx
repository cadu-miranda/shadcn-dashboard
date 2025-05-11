"use client";

import { JSX } from "react";
import { Sun, Moon, MonitorCog } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  const themeIconMapper: Record<string, JSX.Element> = {
    light: (
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    ),
    dark: (
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    ),
    system: (
      <MonitorCog className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
    ),
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {themeIconMapper[theme || "system"]}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Escuro
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ModeToggle };
