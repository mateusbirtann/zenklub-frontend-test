import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserBusinessProfileDescription } from '@/components/user-business-profile/user-business-profile-description';
import { userBusinessProfileDataMock } from '@/__mocks__/user-business-profile-data-mock';

const { userBusinessProfileData } = userBusinessProfileDataMock;

describe('UserBusinessProfileDescription', () => {
  it('renders the description passed to it', () => {
    render(<UserBusinessProfileDescription userBusinessProfileData={userBusinessProfileData} />);
    expect(screen.getByText('Test description for a user business profile.')).toBeInTheDocument();
  });
});
