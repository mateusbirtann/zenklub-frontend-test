import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CalendarHeader } from '@/components/calendar/calendar-header';
import { calendarDataMock } from '@/__mocks__/calendar-data-mock';

const { calendarData } = calendarDataMock;

describe('CalendarHeader', () => {
  it('renders correctly with given calendar data', () => {
    render(<CalendarHeader calendarData={calendarData} />);

    expect(screen.getByText(calendarData.title)).toBeInTheDocument();
    expect(screen.getByText(calendarData.timezone)).toBeInTheDocument();
  });
});
