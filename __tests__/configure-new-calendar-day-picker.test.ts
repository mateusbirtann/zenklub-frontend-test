import { configureCalendarDayPicker } from '@/lib/utils';
import { CalendarDayPickerProps } from '@/types/types';

describe('configureCalendarDayPicker', () => {
  it('should return the correct calendar day picker configuration', () => {
    const currentDate = new Date(2023, 3, 15);
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const times = ['10:00', '11:00', '12:00'];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const expected: CalendarDayPickerProps = {
      Saturday: { date: 'April 15', times },
      Sunday: { date: 'April 16', times },
      Monday: { date: 'April 17', times },
      Tuesday: { date: 'April 18', times },
      Wednesday: { date: 'April 19', times },
    };

    const result = configureCalendarDayPicker(currentDate, daysOfWeek, times, monthNames);
    expect(result).toEqual(expected);
  });

  it('should handle leap years correctly', () => {
    const currentDate = new Date(2024, 1, 28);
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const times = ['10:00', '11:00', '12:00'];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const expected: CalendarDayPickerProps = {
      Wednesday: { date: 'February 28', times },
      Thursday: { date: 'February 29', times },
      Friday: { date: 'March 1', times },
      Saturday: { date: 'March 2', times },
      Sunday: { date: 'March 3', times },
    };

    const result = configureCalendarDayPicker(currentDate, daysOfWeek, times, monthNames);
    expect(result).toEqual(expected);
  });
});
