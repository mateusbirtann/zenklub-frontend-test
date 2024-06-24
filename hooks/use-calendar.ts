import { useState, useEffect } from 'react';
import { configureCalendarDayPicker } from '@/lib/utils';
import { CalendarDayPickerProps } from '@/types/types';

interface SelectedTime {
  time: string;
  date: string;
}

export function useCalendar(
  currentDate: Date,
  daysOfWeek: string[],
  monthNames: string[],
  times: string[],
) {
  const [formattedCurrentDate, setFormattedCurrentDate] = useState(new Date(currentDate));
  const [calendarDayPicker, setCalendarDayPicker] = useState<CalendarDayPickerProps>({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTime, setSelectedTime] = useState<SelectedTime>({ time: '', date: '' });
  const [visibleTimes, setVisibleTimes] = useState(times.slice(0, 5));
  const [nextIndex, setNextIndex] = useState(5);

  useEffect(() => {
    setIsLoading(true);
    const newCalendarDayPicker = configureCalendarDayPicker(
      formattedCurrentDate,
      daysOfWeek,
      visibleTimes,
      monthNames,
    );
    setCalendarDayPicker(newCalendarDayPicker);
    setIsLoading(false);
  }, [formattedCurrentDate, visibleTimes, daysOfWeek, monthNames]);

  const handleNextDay = () => {
    setFormattedCurrentDate(
      new Date(formattedCurrentDate.setDate(formattedCurrentDate.getDate() + 5)),
    );
  };

  const handlePreviousDay = () => {
    setFormattedCurrentDate(
      new Date(formattedCurrentDate.setDate(formattedCurrentDate.getDate() - 5)),
    );
  };

  const handleTimeSelection = (time: string, date: string) => {
    setSelectedTime({ time, date });
  };

  const handleShowMoreTimes = () => {
    const nextTimes = times.slice(nextIndex, nextIndex + 5);
    setVisibleTimes([...visibleTimes, ...nextTimes]);
    setNextIndex(nextIndex + 5);
  };

  return {
    formattedCurrentDate,
    calendarDayPicker,
    isLoading,
    selectedTime,
    visibleTimes,
    nextIndex,
    handleNextDay,
    handlePreviousDay,
    handleTimeSelection,
    handleShowMoreTimes,
  };
}
