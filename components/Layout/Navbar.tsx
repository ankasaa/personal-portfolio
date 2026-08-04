"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/lib/ThemeProvider";
import { NAVIGATION_LINKS } from "@/constants";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek blur saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent"
      )}
    >
      <Container as="nav" className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-zinc-300 transition"
        >
          Ankasaa
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
        </div>

        {/* Mobile: Toggle + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </Container>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 py-4 px-6">
          <div className="flex flex-col gap-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}