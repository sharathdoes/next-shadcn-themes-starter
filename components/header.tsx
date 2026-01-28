import React from "react";
import { ThemeSelector } from "./themes/theme-selector";
import { ThemeModeToggle } from "./themes/theme-mode-toggle";
import CtaGithub from "./ui/cta";

export default function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center mx-4 justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <CtaGithub />
      <div className="flex gap-2 ">
        <ThemeSelector />
        <ThemeModeToggle />
      </div>
    </header>
  );
}
