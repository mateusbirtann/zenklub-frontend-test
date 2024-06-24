import React from 'react';
import { CalendarContent } from '@/components/calendar/calendar-content';
import { CalendarHeader } from '@/components/calendar/calendar-header';
import { getCalendarData } from '@/services/api/get-calendar-data';

export default async function Calendar() {
  const { calendarData } = await getCalendarData();

  return (
    <div className="flex flex-col items-center justify-center">
      <CalendarHeader calendarData={calendarData} />
      <CalendarContent calendarData={calendarData} />
    </div>
  );
}
