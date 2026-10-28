/**
 * Utility to generate standard iCalendar (.ics) downloads or Google Calendar links
 * for Karishma Puri & Mohit Bhardwaj's wedding celebrations.
 */

export const downloadCalendarEvent = (
  title: string,
  description: string,
  location: string,
  dateMonthDay: string, // e.g. "1 December" or "28 December"
  yearOverride?: string
) => {
  // Use specified year or current/next upcoming year if none specified
  const currentYear = new Date().getFullYear();
  const year = yearOverride && yearOverride.trim() !== '' ? parseInt(yearOverride, 10) : currentYear;

  // Map month names
  const monthNames = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
  ];

  const parts = dateMonthDay.trim().split(/\s+/);
  const day = parseInt(parts[0], 10) || 1;
  const monthStr = parts[1] ? parts[1].toLowerCase() : 'december';
  const monthIdx = monthNames.indexOf(monthStr);
  const validMonth = monthIdx >= 0 ? monthIdx + 1 : 12;

  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  const dateStr = `${year}${pad(validMonth)}${pad(day)}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Karishma & Mohit Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `DTSTART;VALUE=DATE:${dateStr}`,
    `DTEND;VALUE=DATE:${dateStr}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${title.replace(/\s+/g, '_')}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
