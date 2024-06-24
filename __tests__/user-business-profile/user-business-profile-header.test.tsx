import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserBusinessProfileHeader } from '@/components/user-business-profile/user-business-profile-header';
import { userBusinessProfileDataMock } from '@/__mocks__/user-business-profile-data-mock';

const { userBusinessProfileData } = userBusinessProfileDataMock;

describe('UserBusinessProfileHeader', () => {
  it('renders the user business profile header correctly', () => {
    render(<UserBusinessProfileHeader userBusinessProfileData={userBusinessProfileData} />);
    expect(screen.getByText(userBusinessProfileData.username)).toBeInTheDocument();
    expect(screen.getByText(userBusinessProfileData.jobRole)).toHaveClass(
      'text-blue-600 font-bold',
    );
    expect(screen.getByText(userBusinessProfileData.address)).toBeInTheDocument();
    expect(screen.getByText(`(${userBusinessProfileData.reviews} Avaliações)`)).toBeInTheDocument();
    expect(screen.getByText(`(${userBusinessProfileData.reviews} Avaliações)`)).toHaveClass(
      'text-gray-500 text-sm',
    );
  });
});
