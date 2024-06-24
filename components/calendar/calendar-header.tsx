import { CalendarDataProps } from '@/types/types';

export function CalendarHeader({ calendarData }: CalendarDataProps) {
  const { title, timezone } = calendarData;

  return (
    <div className="flex w-[333px] flex-col items-center justify-center rounded-t-lg bg-brand-300 p-4 text-center text-white">
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm">{timezone}</p>
    </div>
  );
}
