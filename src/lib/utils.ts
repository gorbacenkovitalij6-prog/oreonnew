import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const trackEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).ym && siteConfig.yandexMetricaId) {
    (window as any).ym(siteConfig.yandexMetricaId, 'reachGoal', eventName);
  }
};
