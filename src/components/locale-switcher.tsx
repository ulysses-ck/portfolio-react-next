"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALE_LABELS = { en: "EN", es: "ES" } as const;

const LocaleSwitcher = () => {
  const t = useTranslations("A11y");
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <fieldset className="m-0 flex items-center rounded-lg border border-border/50 glass-card p-0.5">
      <legend className="sr-only">{t("localeSwitcher")}</legend>
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <button
            key={locale}
            type="button"
            aria-current={isActive ? "page" : undefined}
            onClick={() => {
              if (!isActive) {
                router.replace(pathname, { locale, scroll: false });
              }
            }}
            className={cn(
              "rounded-md px-2 py-1 text-xs font-mono font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {LOCALE_LABELS[locale]}
          </button>
        );
      })}
    </fieldset>
  );
};

export default LocaleSwitcher;
