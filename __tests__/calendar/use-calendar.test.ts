import { useCalendar } from '@/hooks/use-calendar';
import { act, renderHook } from '@testing-library/react';

describe('useCalendar', () => {
  it('initializes with the correct state', () => {
    const { result } = renderHook(() =>
      useCalendar(
        new Date(),
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['January', 'February', 'March'],
        ['08:00', '09:00', '10:00', '11:00', '12:00'],
      ),
    );
    expect(result.current.formattedCurrentDate).toBeInstanceOf(Date);
    expect(result.current.selectedTime).toEqual({ time: '', date: '' });
    expect(result.current.visibleTimes.length).toBe(5);
    expect(result.current.nextIndex).toBe(5);
  });

  it('updates formattedCurrentDate correctly on handleNextDay', () => {
    const { result } = renderHook(() =>
      useCalendar(
        new Date(),
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['January', 'February', 'March'],
        ['08:00', '09:00', '10:00', '11:00', '12:00'],
      ),
    );
    act(() => {
      result.current.handleNextDay();
    });
    expect(result.current.formattedCurrentDate.getDate()).toBe(new Date().getDate() + 5);
  });

  it('updates formattedCurrentDate correctly on handlePreviousDay', () => {
    const { result } = renderHook(() =>
      useCalendar(
        new Date(),
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['January', 'February', 'March'],
        ['08:00', '09:00', '10:00', '11:00', '12:00'],
      ),
    );
    act(() => {
      result.current.handlePreviousDay();
    });
    expect(result.current.formattedCurrentDate.getDate()).toBe(new Date().getDate() - 5);
  });

  it('updates selectedTime correctly on handleTimeSelection', () => {
    const { result } = renderHook(() =>
      useCalendar(
        new Date(),
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['January', 'February', 'March'],
        ['08:00', '09:00', '10:00', '11:00', '12:00'],
      ),
    );
    act(() => {
      result.current.handleTimeSelection('09:00', '2023-04-01');
    });
    expect(result.current.selectedTime).toEqual({ time: '09:00', date: '2023-04-01' });
  });

  it('updates visibleTimes and nextIndex correctly on handleShowMoreTimes', () => {
    const { result } = renderHook(() =>
      useCalendar(
        new Date(),
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ['January', 'February', 'March'],
        ['08:00', '09:00', '10:00', '11:00', '12:00'],
      ),
    );
    act(() => {
      result.current.handleShowMoreTimes();
    });
    expect(result.current.visibleTimes.length).toBe(5);
    expect(result.current.nextIndex).toBe(10);
  });
});
