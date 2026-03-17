import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const trackEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && typeof (window as unknown as { ym?: Function }).ym === 'function' && siteConfig.yandexMetricaId) {
    (window as unknown as { ym: Function }).ym(siteConfig.yandexMetricaId, 'reachGoal', eventName);
  }
};
