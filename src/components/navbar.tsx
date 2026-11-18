"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LocaleSwitcher from "@/components/locale-switcher";
import ThemeToggle from "@/components/theme-toggle";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#about", key: "about" },
  { href: "/#projects", key: "projects" },
  { href: "/#skills", key: "skills" },
  { href: "/#contact", key: "contact" },
] as const;

const sectionIds = ["about", "projects", "skills", "contact"];

const Navbar = () => {
  const t = useTranslations("Nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-card border-b border-border/50" : "",
      )}
    >
      <nav className="container mx-auto px-6 py-4" aria-label={t("menu")}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold font-mono focus-visible:outline-2 focus-visible:outline-ring"
          >
            <span className="text-gradient">{"<AC />"}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                aria-current={activeSection === link.key ? "true" : undefined}
                className={cn(
                  "group relative text-sm transition-colors py-2 focus-visible:outline-2 focus-visible:outline-ring",
                  activeSection === link.key
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t(link.key)}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300",
                    activeSection === link.key
                      ? "w-full"
                      : "w-0 group-hover:w-full",
                  )}
                />
              </a>
            ))}

            <div className="flex items-center gap-2">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>

            <motion.a
              href="/#contact"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-ring"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("hireMe")}
            </motion.a>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-foreground focus-visible:outline-2 focus-visible:outline-ring"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="size-6" aria-hidden="true" />
              ) : (
                <Menu className="size-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className={cn(
                      "py-2 transition-colors",
                      activeSection === link.key
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(link.key)}
                  </a>
                ))}
                {/* biome-ignore lint/a11y/useValidAnchor: real navigation link that also dismisses the mobile menu */}
                <a
                  href="/#contact"
                  className="px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium text-center focus-visible:outline-2 focus-visible:outline-ring"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("hireMe")}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
