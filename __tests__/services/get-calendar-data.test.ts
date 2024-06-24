import { getCalendarData } from '@/services/api/get-calendar-data';
import { calendarDataMock } from '@/__mocks__/calendar-data-mock';

const { calendarData } = calendarDataMock;

global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('getUserBusinessProfileData', () => {
  it('should return user business profile data on successful API call', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(calendarData),
    });

    const data = await getCalendarData();
    expect(data).toEqual(calendarData);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3333/calendar');
  });

  it('should throw an error when API response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(getCalendarData()).rejects.toThrow('Failed to fetch calendar data. Status: 404');
  });
});
