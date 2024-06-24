import { CalendarDataProps } from '@/types/types';

const CALENDAR_API_URL = 'http://localhost:3333/calendar';

export async function getCalendarData(): Promise<CalendarDataProps> {
  try {
    const response = await fetch(CALENDAR_API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch calendar data. Status: ${response.status}`);
    }

    const calendarData: CalendarDataProps = await response.json();
    return calendarData;
  } catch (error) {
    throw error;
  }
}
