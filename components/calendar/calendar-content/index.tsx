'use client';

import { CalendarDataProps } from '@/types/types';
import { NavigationButton } from './navigation-button';
import { Button } from '@/components/ui/button';
import { useCalendar } from '../../../hooks/use-calendar';
import { DayPicker } from './day-picker';

export function CalendarContent({ calendarData }: CalendarDataProps) {
  const { currentDate, daysOfWeek, monthNames, times } = calendarData;

  const {
    calendarDayPicker,
    isLoading,
    selectedTime,
    nextIndex,
    handleNextDay,
    handlePreviousDay,
    handleTimeSelection,
    handleShowMoreTimes,
  } = useCalendar(currentDate, daysOfWeek, monthNames, times);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="flex items-center justify-center rounded-b-lg border pb-2">
        <NavigationButton direction="previous" onClick={handlePreviousDay} />
        {Object.entries(calendarDayPicker).map(([dayOfWeek, { date, times }], index) => (
          <DayPicker
            key={index}
            dayOfWeek={dayOfWeek}
            date={date}
            times={times}
            selectedTime={selectedTime}
            onTimeSelect={handleTimeSelection}
          />
        ))}
        <NavigationButton direction="next" onClick={handleNextDay} />
      </div>
      {nextIndex < times.length && (
        <Button variant="secondary" className="my-2 w-full" onClick={handleShowMoreTimes}>
          Mostrar mais horários
        </Button>
      )}
      <Button className="my-2 w-full" onClick={() => console.log(selectedTime)}>
        Agendar
      </Button>
    </>
  );
}
