// components/Events.js
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { formatInTimeZone, toZonedTime } from "date-fns-tz";
import idLocale from "date-fns/locale/id";

const timeMap = {
  Pagi: "08:00",
  Siang: "13:00",
  Sore: "16:00",
  Malam: "19:00",
};

function parseEventToJakartaTime(dateString, waktu) {
  const approxTime = timeMap[waktu] || "08:00";
  const [hours, minutes] = approxTime.split(":").map(Number);

  // Parse date string with Bahasa Indonesia locale
  let baseDate = new Date(dateString); // Fallback if parsing fails
  try {
    baseDate = parseDateString(dateString);
  } catch (e) {
    console.warn("Failed to parse date:", dateString);
  }

  // Set approximate time manually
  baseDate.setHours(hours, minutes, 0, 0);

  // Convert to Jakarta time
  return toZonedTime(baseDate, "Asia/Jakarta");
}

function parseDateString(dateString) {
  const months = {
    Januari: "01",
    Februari: "02",
    Maret: "03",
    April: "04",
    Mei: "05",
    Juni: "06",
    Juli: "07",
    Agustus: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Desember: "12",
  };
  const parts = dateString.split(" ");
  const day = parts[0];
  const month = months[parts[1]] || parts[1];
  const year = parts[2];

  return new Date(`${year}-${month}-${day}`);
}

function groupEventsByDateAndTimezone(events) {
  const grouped = {};

  events.forEach((event) => {
    const key = `${event.tanggal}-${event.waktu}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(event);
  });

  return grouped;
}

function EventList({
  index,
  isLastGroup,
  isNextGroup,
  isCompletedGroup,
  group,
  formattedDate,
}) {
  // Render each event item
  const isLastGroupClass = isLastGroup ? "h-full" : "h-4";
  return (
    <li key={index} className="relative pl-8 pb-6">
      {/* Vertical Line */}
      <div
        className={`absolute left-[0.47rem] top-0 ${isLastGroupClass} w-0.5 bg-gray-300`}
      ></div>

      {/* Timeline Dot */}
      <div className="absolute left-0 top-[0.25rem] flex items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
            isCompletedGroup
              ? "bg-green-500 border-green-600"
              : isNextGroup
                ? "bg-red-500 border-red-600"
                : "bg-gray-300 border-gray-400"
          }`}
        >
          {isCompletedGroup && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-3 h-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Event Group Header */}
      <div className="mb-4">
        <h3 className="font-semibold">{formattedDate}</h3>
      </div>

      {/* List of Events in Group */}
      <ul className="space-y-4 ml-6">
        {group.map((event, index) => {
          const isCompleted = event.status === "completed";
          const isToday = event.status === "today";

          return (
            <li
              key={`${event.kegiatan}-${index}`}
              className={`p-4 rounded-md shadow-sm border transition-all ${
                isCompleted
                  ? "bg-gray-100 border-gray-200 text-gray-500"
                  : isToday
                    ? "bg-red-50 border-red-200 ring-2 ring-red-200"
                    : "bg-white border-gray-200"
              }`}
            >
              <h4
                className={`font-medium ${isCompleted ? "line-through" : ""}`}
              >
                {event.kegiatan}
              </h4>
              <p className="text-sm mt-1">Lokasi: {event.lokasi}</p>
              <p className="text-sm mt-1">
                PJ:{" "}
                <span className="font-medium">{event.penanggung_jawab}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </li>
  );
}

function Events({ basepath }) {
  const [groupedEvents, setGroupedEvents] = useState([]);
  const [nextGroupIndex, setNextGroupIndex] = useState(null);
  const [nowJakarta, setNowJakarta] = useState(null);

  useEffect(() => {
    const now = toZonedTime(new Date(), "Asia/Jakarta");
    setNowJakarta(now);

    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => {
        const processed = data.map((event) => {
          const eventDate = parseEventToJakartaTime(event.tanggal, event.waktu);

          let status = "upcoming";
          if (eventDate < now) {
            status = "completed";
          } else if (
            formatInTimeZone(eventDate, "Asia/Jakarta", "yyyy-MM-dd") ===
            formatInTimeZone(now, "Asia/Jakarta", "yyyy-MM-dd")
          ) {
            status = "today";
          }

          return {
            ...event,
            eventDate,
            status,
          };
        });

        processed.sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime());

        const grouped = groupEventsByDateAndTimezone(processed);

        // Find first upcoming group
        const groupKeys = Object.keys(grouped);
        const nextGroupKey = groupKeys.find((key) => {
          const [tanggal, waktu] = key.split("-");
          const eventDate = parseEventToJakartaTime(tanggal, waktu);
          return eventDate >= now;
        });
        const nextGroupIndex = nextGroupKey
          ? groupKeys.indexOf(nextGroupKey)
          : null;

        setGroupedEvents(grouped);
        setNextGroupIndex(nextGroupIndex);
      })
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  if (!nowJakarta) {
    return (
      <div className="text-center py-20">
        <p>Memuat jadwal acara...</p>
      </div>
    );
  }

  return (
    <section id="event" className="min-h-screen py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Jadwal Kegiatan HUT RI ke-80
        </motion.h2>

        {groupedEvents ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <ul>
              {Object.entries(groupedEvents).map(([key, group], groupIndex) => {
                const [tanggal, waktu] = key.split("-");
                const eventDate = parseEventToJakartaTime(tanggal, waktu);
                const formattedDate = formatInTimeZone(
                  eventDate,
                  "Asia/Jakarta",
                  "EEEE, d MMMM yyyy • HH:mm",
                  {
                    locale: idLocale,
                  },
                );

                const isCompletedGroup =
                  eventDate < nowJakarta ||
                  group.every((e) => e.status === "completed");

                const isNextGroup = groupIndex === nextGroupIndex;
                const isLastGroup =
                  groupIndex !== Object.keys(groupedEvents).length - 1;

                return (
                  <EventList
                    key={key}
                    index={key}
                    isLastGroup={isLastGroup}
                    isNextGroup={isNextGroup}
                    isCompletedGroup={isCompletedGroup}
                    group={group}
                    formattedDate={formattedDate}
                  />
                );
              })}
            </ul>
          </motion.div>
        ) : (
          <p className="text-center text-gray-500">
            Belum ada jadwal tersedia.
          </p>
        )}
      </div>
    </section>
  );
}

export default Events;
