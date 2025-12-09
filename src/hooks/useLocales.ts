import en from "../locales/en.json";
import fr from "../locales/fr.json";

type LocaleStrings = typeof en;

export const locales: Record<string, LocaleStrings> = {
  en,
  fr
};

export default function useLocale(lang: string): LocaleStrings {
  return locales[lang] || locales["en"];
}
