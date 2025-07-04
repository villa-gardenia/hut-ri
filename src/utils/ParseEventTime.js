// utils/parseEventTime.js

import { parse } from "date-fns";
import idLocale from "date-fns/locale/id";

// Map waktu (time-of-day) to approximate hour
const timeMap = {
  Pagi: "08:00",
  Siang: "13:00",
  Sore: "16:00",
  Malam: "19:00",
};

/**
 * Parses event date + waktu into Jakarta time
 * @param {string} dateString - e.g., "27 Juli 2025"
 * @param {string} waktu - e.g., "Pagi"
 * @returns {Date} Jakarta time as Date object
 */
export function parseEventToJakartaTime(dateString, waktu) {
  const approxTime = timeMap[waktu] || "08:00";
  const [hours, minutes] = approxTime.split(":").map(Number);

  // Parse date string with Bahasa Indonesia locale
  let baseDate = parse(dateString, "d MMMM yyyy", new Date(), {
    locale: idLocale,
  });

  // Set approximate time manually (TZDate not available yet)
  baseDate.setHours(hours, minutes, 0, 0);

  // Convert to Jakarta time
  return toZonedTime(baseDate, "Asia/Jakarta");
}

/**
 * Get current time in Jakarta
 * @returns {Date}
 */
export function getNowInJakarta() {
  return toZonedTime(new Date(), "Asia/Jakarta");
}
