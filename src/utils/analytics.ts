"use client";

import { sendGAEvent } from "@next/third-parties/google";

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  sendGAEvent("event", eventName, params ?? {});
};
