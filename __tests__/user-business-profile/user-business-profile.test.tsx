import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserBusinessProfile from '@/components/user-business-profile';
import { userBusinessProfileDataMock } from '@/__mocks__/user-business-profile-data-mock';

const { userBusinessProfileData } = userBusinessProfileDataMock;

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: () =>
      Promise.resolve({
        userBusinessProfileData,
      }),
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

it('Should render user business profile data correctly', async () => {
  render(await UserBusinessProfile());

  expect(await screen.findByText('testuser')).toBeInTheDocument(); // Check UserBusinessProfileHeader rendering
  expect(
    await screen.findByText('Test description for a user business profile.'),
  ).toBeInTheDocument(); // Check UserBusinessProfileDescription rendering
});

it('Should handle error when fetching user business profile data fails', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status: 500,
  });

  await expect(UserBusinessProfile()).rejects.toThrow(
    'Failed to fetch user business profile data. Status: 500',
  );
});
