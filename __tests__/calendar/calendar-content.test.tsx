import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as CalendarHook from '@/hooks/use-calendar';
import { CalendarContent } from '@/components/calendar/calendar-content';
import { calendarDataMock } from '@/__mocks__/calendar-data-mock';

const { calendarData } = calendarDataMock;

jest.mock('@/hooks/use-calendar', () => ({
  useCalendar: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CalendarContent', () => {
  it('should display loading state', () => {
    (CalendarHook.useCalendar as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    render(<CalendarContent calendarData={calendarData} />);
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  });

  it('should render day pickers and navigation buttons', () => {
    (CalendarHook.useCalendar as jest.Mock).mockReturnValue({
      isLoading: false,
      calendarDayPicker: {
        Sunday: { date: '2023-04-02', times: ['09:00', '10:00'] },
      },
      selectedTime: '09:00',
      nextIndex: 2,
      handleNextDay: jest.fn(),
      handlePreviousDay: jest.fn(),
      handleTimeSelection: jest.fn(),
      handleShowMoreTimes: jest.fn(),
    });
    render(<CalendarContent calendarData={calendarData} />);
    expect(screen.getByText('Sunday')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Agendar' })).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'Mostrar mais horários' })).toBeInTheDocument();
  });

  it('should handle navigation button clicks', () => {
    const mockHandleNextDay = jest.fn();
    const mockHandlePreviousDay = jest.fn();
    (CalendarHook.useCalendar as jest.Mock).mockReturnValue({
      isLoading: false,
      calendarDayPicker: {
        Sunday: { date: '2023-04-02', times: ['09:00', '10:00'] },
      },
      selectedTime: '09:00',
      nextIndex: 2,
      handleNextDay: mockHandleNextDay,
      handlePreviousDay: mockHandlePreviousDay,
      handleTimeSelection: jest.fn(),
      handleShowMoreTimes: jest.fn(),
    });
    render(<CalendarContent calendarData={calendarData} />);
    fireEvent.click(screen.getByTestId('navigation-button-next'));
    expect(mockHandleNextDay).toHaveBeenCalled();
    fireEvent.click(screen.getByTestId('navigation-button-previous'));
    expect(mockHandlePreviousDay).toHaveBeenCalled();
  });

  it('should handle "Mostrar mais horários" button click', () => {
    const mockHandleShowMoreTimes = jest.fn();
    (CalendarHook.useCalendar as jest.Mock).mockReturnValue({
      isLoading: false,
      calendarDayPicker: {
        Sunday: { date: '2023-04-02', times: ['09:00', '10:00'] },
      },
      selectedTime: '09:00',
      nextIndex: 2,
      handleTimeSelection: jest.fn(),
      handleShowMoreTimes: mockHandleShowMoreTimes,
    });
    render(<CalendarContent calendarData={calendarData} />);
    fireEvent.click(screen.getByText('Mostrar mais horários'));
    expect(mockHandleShowMoreTimes).toHaveBeenCalled();
  });
});
