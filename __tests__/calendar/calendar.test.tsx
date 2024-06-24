import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from '@/components/calendar';
import { calendarDataMock } from '@/__mocks__/calendar-data-mock';

const { calendarData } = calendarDataMock;

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () =>
      Promise.resolve({
        calendarData,
      }),
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

it('Should render calendar component correctly', async () => {
  render(await Calendar());

  expect(await screen.findByText('Agende sua sessão!')).toBeInTheDocument(); // Check CalendarHeader rendering
  expect(await screen.findByText('Sunday')).toBeInTheDocument(); // Check CalendarContent rendering
});

it('Should handle error when fetching calendar data fails', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status: 500,
  });

  await expect(Calendar()).rejects.toThrow('Failed to fetch calendar data. Status: 500');
});
