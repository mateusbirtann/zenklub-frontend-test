import { getUserBusinessProfileData } from '@/services/api/get-user-business-profile';
import { userBusinessProfileDataMock } from '@/__mocks__/user-business-profile-data-mock';

const { userBusinessProfileData } = userBusinessProfileDataMock;

global.fetch = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('getUserBusinessProfileData', () => {
  it('should return user business profile data on successful API call', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(userBusinessProfileData),
    });

    const data = await getUserBusinessProfileData();
    expect(data).toEqual(userBusinessProfileData);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3333/userBusinessProfile');
  });

  it('should throw an error when API response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    await expect(getUserBusinessProfileData()).rejects.toThrow(
      'Failed to fetch user business profile data. Status: 404',
    );
  });
});
