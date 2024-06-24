import { useCalendar } from '@/hooks/use-calendar';
import { act, renderHook } from '@testing-library/react';

import { calendarDataMock } from '@/__mocks__/calendar-data-mock';

const { calendarData } = calendarDataMock;

describe('useCalendar with mocked data', () => {
  it('initializes with mocked data correctly', () => {
    const { result } = renderHook(() =>
      useCalendar(
        calendarData.currentDate,
        calendarData.daysOfWeek,
        calendarData.monthNames,
        calendarData.times,
      ),
    );
    expect(result.current.formattedCurrentDate).toEqual(calendarData.currentDate);
    expect(result.current.selectedTime).toEqual({ time: '', date: '' });
    expect(result.current.visibleTimes.length).toBe(5);
    expect(result.current.nextIndex).toBe(5);
  });

  it('isLoading state updates correctly after initial render', async () => {
    const { result } = renderHook(() =>
      useCalendar(
        calendarData.currentDate,
        calendarData.daysOfWeek,
        calendarData.monthNames,
        calendarData.times,
      ),
    );
    expect(result.current.isLoading).toBe(false);
  });

  it('handles next day selection correctly', () => {
    const { result } = renderHook(() =>
      useCalendar(
        calendarData.currentDate,
        calendarData.daysOfWeek,
        calendarData.monthNames,
        calendarData.times,
      ),
    );
    act(() => {
      result.current.handleNextDay();
    });
    expect(result.current.formattedCurrentDate.getDate()).toBe(5);
  });

  it('handles previous day selection correctly', () => {
    const { result } = renderHook(() =>
      useCalendar(
        calendarData.currentDate,
        calendarData.daysOfWeek,
        calendarData.monthNames,
        calendarData.times,
      ),
    );
    act(() => {
      result.current.handlePreviousDay();
    });

    expect(result.current.formattedCurrentDate.getDate()).toBe(26);
  });

  it('handles showing more times correctly', () => {
    const { result } = renderHook(() =>
      useCalendar(
        calendarData.currentDate,
        calendarData.daysOfWeek,
        calendarData.monthNames,
        calendarData.times,
      ),
    );
    act(() => {
      result.current.handleShowMoreTimes();
    });
    expect(result.current.visibleTimes.length).toBe(9);
    expect(result.current.nextIndex).toBe(10);
  });
});
